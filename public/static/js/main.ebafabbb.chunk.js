(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(231)},111:function(e,t,n){},113:function(e,t,n){},139:function(e,t){},142:function(e,t,n){},146:function(e,t){},148:function(e,t){},183:function(e,t){},184:function(e,t){},229:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(104),r=n.n(o),c=(n(111),n(16)),s=n(11),l=n(12),u=n(14),d=n(13),p=n(15),m=(n(113),n(105)),f={websocketUrl:"192.168.0.14",videoFeedUrl:"192.168.0.14"},v=n.n(m)()("http://".concat(f.websocketUrl,":5001"));function h(e,t){var n=JSON.stringify({speed:e,direction:t});v.emit("movement-control",n)}var g=function(e){function t(e){var n,a;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={proximity:"no data yet"},a=function(e,t){return n.setState({proximity:t})},v.on("proximity",function(e){a(null,e)}),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"setStyles",value:function(){var e=this.state.proximity;return e<30?{width:e.toString()+"%",backgroundColor:"red"}:e<50?{width:e.toString()+"%",backgroundColor:"orange"}:{width:(e<100?e:100).toString()+"%",backgroundColor:"green"}}},{key:"render",value:function(){return i.a.createElement("div",{className:"control-container"},i.a.createElement("h2",{className:"tab"},"Proximity"),i.a.createElement("div",null),i.a.createElement("div",{className:"test",style:this.setStyles()}))}}]),t}(a.Component),b=n(38),O=n(6);function E(){var e=Object(b.a)(["\n\nborder: none;\nwidth:80px;\nheight:80px;\nborder-radius: 40px;\nfont-size: 20px;\n}\n"]);return E=function(){return e},e}function S(){var e=Object(b.a)(["\n    \n    padding: 12px;\n    text-align: center;\n    color: #f2f2f2;\n    font-size: 30px;\n    line-height:1.8;\n}\n"]);return S=function(){return e},e}function j(){var e=Object(b.a)(["\n    text-align: center;\n    display: grid;\n    column-gap: 10px;\n    grid-template-columns: 1fr 3fr 3fr 1fr;\n"]);return j=function(){return e},e}var w=Object(O.a)(j()),k=Object(O.a)(S()),y=Object(O.a)(E()),F=function(e){function t(e){var n,a;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={sliderValue:0,direction:"Stopped",speed:0},a=function(e,t){console.log(t);var a=t.direction,i=t.speed,o=0;switch(a.toLowerCase()){case"forwards":o=i=i<0?-i:i;break;case"backwards":o=i<0?i:-i,i=i<0?-i:i;break;default:a="stopped",i=0}console.log(o),n.setState({sliderValue:o,direction:n.capitalizeFirstLetter(a),speed:i})},v.on("movement-control",function(e){var t=JSON.parse(e);a(null,t)}),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"capitalizeFirstLetter",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"setSliderValues",value:function(e){var t,n=e.target.value,a=0;n>0?(a=n,t="Forwards"):n<0?(a=-n,t="Backwards"):(a=Number(n),t="Stopped"),this.setState(function(e){return{sliderValue:n,direction:t,speed:a}}),h(a,t)}},{key:"stopTrain",value:function(){this.setState(function(e){return{sliderValue:0,direction:"Stopped",speed:Number(0)}}),h(0,"Stopped")}},{key:"displayStop",value:function(){var e=this;if(0!==this.state.speed)return Object(O.b)("button",{css:y,onClick:function(){return e.stopTrain()}},"STOP")}},{key:"render",value:function(){var e=this;return Object(O.b)("div",{className:"control-container"},Object(O.b)("h2",{className:"tab"},"Motor"),Object(O.b)("div",{css:w},Object(O.b)("div",null),Object(O.b)("div",{css:k},this.state.direction),Object(O.b)("div",{css:k},this.state.speed,"%"),Object(O.b)("button",{css:y,onClick:function(){return e.stopTrain()},className:0===this.state.speed?"bg-light-grey":"bg-red"},"STOP")),Object(O.b)("input",{type:"range",id:"start",name:"volume",min:"-100",max:"100",value:this.state.sliderValue,onChange:function(t){return e.setSliderValues(t)}}))}}]),t}(a.Component),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).url="http://".concat(n.props.ip,":").concat(n.props.port,"/video_feed"),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("figure",null,i.a.createElement("figcaption",null,this.props.caption),i.a.createElement("picture",null,i.a.createElement("img",{src:"http://".concat(this.props.ip,":").concat(this.props.port,"/video_feed"),alt:"raw video feed from opencv on the RPI"})))}}]),t}(a.Component),C=(n(142),n(69)),V=function(e){function t(e){var n,a;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={proximity:"no data yet",info:[]},n.checkInfoItemExistsAndUpdate=function(e){if(!e)return console.log("error: no item ");var t=Object(c.a)(n.state.info);0!==(t=t.filter(function(t){return t.header===e.header})).length&&(t=(t=Object(c.a)(n.state.info)).filter(function(t){return t.header!==e.header}),n.setState({info:t}))},n.addInfoItem=function(e){var t=Object(c.a)(n.state.info);e.id=C(),e.time=new Date,t.push(e),t.sort(function(e,t){return new Date(t.time)-new Date(e.time)}),n.setState({info:t}),console.log("Info Item added: ".concat(JSON.stringify(e)))},n.removeInfoItem=function(e){console.log(e);var t=Object(c.a)(n.state.info);t=t.filter(function(t){return t.id!==e}),n.setState({info:t})},a=function(e,t){console.log(t),t.header=String(t.header).trim(),n.checkInfoItemExistsAndUpdate(t),n.addInfoItem(t)},v.on("info",function(e){a(null,e)}),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"info-control-container"},i.a.createElement("div",{className:"control-row-one"},i.a.createElement("p",{className:"label"},"Info")),i.a.createElement("div",{className:"control-row-two"},this.state.info.map(function(t){return i.a.createElement("div",{key:t.id,className:"item"},i.a.createElement("span",null,t.header),i.a.createElement("span",null,t.message),i.a.createElement("button",{onClick:function(){return e.removeInfoItem(t.id)}},"Remove"))})))}}]),t}(a.Component),x=(n(229),function(e){return i.a.createElement("div",{className:"overlay",onClick:e.toggle},i.a.createElement("div",{className:"settings-panel",onClick:function(e){e.stopPropagation()}},i.a.createElement("h2",null,"Settings"),i.a.createElement("h3",null,i.a.createElement("small",null,"version: 0.7.0")),i.a.createElement("div",{className:"settings-panel-item"},i.a.createElement("span",null,"Video feeds"),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("button",{onClick:e.addFeed},i.a.createElement("i",{className:"fas fa-plus"}))),e.videoFeeds.map(function(t){return i.a.createElement("div",{className:"settings-panel-item",key:t.id},i.a.createElement("label",null,"Caption:",i.a.createElement("input",{type:"text",defaultValue:t.caption?t.caption:"Enter Caption",onChange:function(n){return e.editVideoFeed(n,t.id,"caption")}})),i.a.createElement("label",null,"URI:",i.a.createElement("input",{type:"text",defaultValue:t.ip,onChange:function(n){return e.editVideoFeed(n,t.id,"ip")},className:"ip"})),i.a.createElement("label",null,"Port:",i.a.createElement("input",{type:"text",className:"port",defaultValue:t.port,onChange:function(n){return e.editVideoFeed(n,t.id,"port")}})),i.a.createElement("button",{onClick:function(){return e.removeVideoFeed(t.id)}},i.a.createElement("i",{className:"far fa-trash-alt sm"})))})))}),I=n(69),P=f.websocketUrl,U=f.videoFeedUrl,J=function(e){function t(){var e;Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={videoFeeds:[{id:I(),ip:U,port:"8081",caption:"raw"}],websocketUrl:P,websocketPort:5001,settingsShow:!1},e.toggleSettingsPage=function(){var t=e.state.settingsShow;e.setState({settingsShow:!t}),console.log(!t),e.saveSettings()},e.addVideoFeed=function(){var t=Object(c.a)(e.state.videoFeeds),n={id:I(),ip:P,port:"5002",caption:""};t.push(n),e.setState({videoFeeds:t}),e.saveSettings()},e.removeVideoFeed=function(t){console.log("remove feed id:".concat(t));var n=Object(c.a)(e.state.videoFeeds);n=n.filter(function(e){return e.id!==t}),e.setState({videoFeeds:n}),e.saveSettings()},e.editVideoFeed=function(t,n,a){var i=Object(c.a)(e.state.videoFeeds),o=i.filter(function(e){return e.id===n});if(i=i.filter(function(e){return e.id!==n}),o.length>0){var r=o[0];switch(a){case"ip":r.ip=t.target.value.trim();break;case"port":r.port=t.target.value.trim();break;case"caption":r.caption=t.target.value.trim()}i.push(r),console.log(JSON.stringify(i)),e.setState({videoFeeds:i}),e.saveSettings()}},e.saveSettings=function(){var t=e.state;localStorage.setItem("appState",JSON.stringify(t))};var n=localStorage.getItem("appState");if(n){var a=JSON.parse(n);a.settingsShow=!1,console.log("has state"),e.state=a}else{console.log("has no state");var i={videoFeeds:[{id:I(),ip:U,port:"8081",caption:"raw"}],websocketUrl:P,websocketPort:5001,settingsShow:!1};e.state=i}return e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return this.state.settingsShow&&(e=i.a.createElement(x,{videoFeeds:this.state.videoFeeds,toggle:this.toggleSettingsPage,addFeed:this.addVideoFeed,removeVideoFeed:this.removeVideoFeed,editVideoFeed:this.editVideoFeed})),i.a.createElement("main",null,e,i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"feeds"},this.state.videoFeeds.map(function(e){return i.a.createElement(N,{key:e.id,ip:e.ip,port:e.port,caption:e.caption})}),i.a.createElement("div",null,i.a.createElement("button",{onClick:this.toggleSettingsPage},"settings"))),i.a.createElement("div",{className:"controls"},i.a.createElement(g,null),i.a.createElement(F,null),i.a.createElement(V,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[106,2,1]]]);
//# sourceMappingURL=main.ebafabbb.chunk.js.map