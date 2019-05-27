//const url = 'ws://localhost:8080'
const url = 'ws://akf-iot.herokuapp.com:80'
const WebSocket = require('ws')
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send('connected##') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
    if(e.data === "ack##") {
        console.log("Connection Acknowledged!")
    }
    else if(e.data === "what##") {
        console.log("Unknown Message Sent From Client"); 
    }
}
