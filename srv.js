const WebSocket = require('ws');

var prt = process.env.PORT || 3000;
const wss = new WebSocket.Server( { port: prt } );

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
      if(message === "connected##") {
        ws.send("ack##");
      }
      else if(  message === "buttonClicked##") {
        ws.send("clickReceived##");
      }
      else {
          ws.send("what##");
      }
  });

});
