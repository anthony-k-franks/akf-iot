const express = require('express')
const PORT = process.env.PORT || 3000
const INDEX = './index.html'

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const WebSocket = require('ws');

const wss = new WebSocket.Server( { PORT } );

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
