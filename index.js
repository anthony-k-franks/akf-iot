const express = require('express')
const port = process.env.PORT || 3000
const INDEX = '/app/index.html'

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(port, () => console.log(`Listening on ${ port }`));

const WebSocket = require('ws');

const wss = new WebSocket.Server( { server } );

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
      if(message === "connected##") {
        ws.send("ack##");
      }
      else if(  message === "greenClicked##") {
        ws.send("greenRcvd##");
      }
      else if(  message === "yellowClicked##") {
        ws.send("yellowRcvd##");
      }
      else if(  message === "redClicked##") {
        ws.send("redRcvd##");
      }
      else {
          ws.send("what##");
      }
  });

});
