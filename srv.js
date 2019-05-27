const WebSocket = require('ws');

var port = process.env.PORT || 3000;
const wss = new WebSocket.Server( port );

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
      if(message === "connected##") {
        ws.send("ack##");
      }
      else {
          ws.send('what##');
      }
  });

});
