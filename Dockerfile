# FROM node:8.15.0-stretch-slim
FROM arm32v7/node:8.15.0-stretch-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 5001

CMD [ "npm", "start" ]
