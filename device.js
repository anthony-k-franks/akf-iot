const url = 'ws://akf-iot.herokuapp.com:80'
const WebSocket = require('ws')
const deviceConn = new WebSocket(url)

var greenToggle = 0;
var yellowToggle = 0;
var redToggle = 0;

// Use child_process.spawn method from  
// child_process module and assign it 
// to variable spawn 
var spawn = require("child_process").spawn;
var process = 0;

 deviceConn.onopen = () => {
    deviceConn.send("deviceConnected##"); 
}

deviceConn.onerror = (error) => {
    console.log(`WebSocket error: ${error}`);
}

deviceConn.onmessage = (e) => {
    console.log(e.data)
    if(e.data === "deviceAck##") {
        console.log("Device Connection Acknowledged!");
    }
    else if(e.data === "greenRcvd##") {
        //console.log("Green Toggled!");
        if( greenToggle === 0)
        {
            greenToggle = 1;
            process = spawn('python',["./led.py", 0, 0] ); 
            
        }
        else if( greenToggle === 1)
        {
            greenToggle = 0;
            process = spawn('python',["./led.py", 0, 1] ); 
        }
    }
    else if(e.data === "yellowRcvd##") {
        //console.log("Yellow Toggled!");
        if( yellowToggle === 0)
        {
            yellowToggle = 1;
            process = spawn('python',["./led.py", 1, 0] ); 
        }
        else if( yellowToggle === 1)
        {
            yellowToggle = 0;
            process = spawn('python',["./led.py", 1, 1] ); 
        }
    }
    else if(e.data === "redRcvd##") {
        //console.log("Red Toggled!");
        if( redToggle === 0)
        {
            redToggle = 1;
            process = spawn('python',["./led.py", 2, 0] ); 
        }
        else if( redToggle === 1)
        {
            redToggle = 0;
            process = spawn('python',["./led.py", 2, 1] ); 
        }
    }
    else if(e.data === "what##") {
        console.log("Unknown Message Sent From Client"); 
    }
}