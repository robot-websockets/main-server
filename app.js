var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
const express = require('express');
var path = require('path');

const PORT = 5001;
// const HOST = '0.0.0.0';
server.listen(PORT);
// WARNING: app.listen(80) will NOT work here!
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json

app.get('/', function(req, res) {
    console.log(':req to /');
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/proximity/', (req, res) => {
    const value = req.body.proximity;
    res.send('working');
    // console.log(value);
    io.sockets.emit('proximity', value);
});
app.post('/api/info/', (req, res) => {
    const bodyData = req.body;
    res.send(bodyData);
    console.log(bodyData);
    io.sockets.emit('info', bodyData);
});
app.post('/api/barcodes/', (req, res) => {
    if (req.body.speed !== undefined) {
        io.sockets.emit('movement-control', JSON.stringify(req.body));
        // console.log('has speed');
    }
    if (req.body.header !== undefined) {
        io.sockets.emit('info', req.body);
        // console.log('no header');
    }

    // console.log('/api/barcodes/ data:' + JSON.stringify(req.body));
    res.send('ok');
    // console.log(value);
    // io.sockets.emit('info', bodyData);
});
app.post('/api/movement-control/', (req, res) => {
    const { speed, direction, duration, order } = req.body;

    res.send({ speed, direction, duration, order });

    console.log({ speed, direction, duration, order });
    io.sockets.emit(
        'movement-control',
        JSON.stringify({
            speed,
            direction,
            duration,
            order
        })
    );
});

// when a connetion is made
// we store it here
// then remove when it disconnects.
let connectedServices = [];

connectionAdded = data => {
    // const con = JSON.parse(data);
    // console.log(`ping: ${JSON.stringify(data)}`);
    const newService = {
        name: data.device,
        id: data.id,
        connected: true
    };
    connectedServices.push(newService);

    // console.log(JSON.stringify(connectedServices));
    const payload = { header: data.device, message: 'connected' };
    io.sockets.emit('info', payload);
};

connectionRemoved = id => {
    // const con = JSON.parse(data);
    console.log(`removed id: ${id}`);
    const disconnectedService = connectedServices.filter(
        item => item.id === id
    );

    console.log(disconnectedService);
    if (disconnectedService.length > 0) {
        const payload = {
            header: disconnectedService[0].name,
            message: 'Disconnected'
        };
        io.sockets.emit('info', payload);
        connectedServices = connectedServices.filter(item => item.id !== id);
        return;
    }
    console.log(`not found: ${id}`);
};

io.on('connection', server => {
    console.log('new connection');
    // return user id to the caller
    io.to(`${server.id}`).emit('ping', server.id);

    server.on('ping', data => {
        // console.log(data.device);
        connectionAdded(data);
    });

    server.on('proximity', data => {
        console.log(data);
        server.broadcast.emit('proximity', data);
    });

    server.on('movement-control', data => {
        console.log(data);
        server.broadcast.emit('movement-control', data);
    });
    server.on('info', data => {
        console.log(data);
        server.broadcast.emit('info', data);
    });
    server.on('disconnect', () => {
        const id = server.id;
        connectionRemoved(id);
        // console.log(`Client disconnected ${id}`);
        // const payload = { header: 'Client', message: `disconnected:${id}` };
        // client.emit('info', payload);
    });
});
