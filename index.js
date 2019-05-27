const express = require('express')
const port = process.env.PORT || 3000
const INDEX = '/app/index.html'

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(port, () => console.log(`Listening on ${ port }`));

const WebSocket = require('ws');

const wss = new WebSocket.Server( { server } );

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
      if(message === "connected##") {
        ws.send("ack##");
      }
      else if(message === "deviceConnected##") {
        ws.send("deviceAck##");
      }
      else if(  message === "greenClicked##") {
        wss.broadcast("greenRcvd##");
      }
      else if(  message === "yellowClicked##") {
        wss.broadcast("yellowRcvd##");
      }
      else if(  message === "redClicked##") {
        wss.broadcast("redRcvd##");
      }
      else {
          ws.send("what##");
      }
  });
});
