//needs to export something to play nice w/ babel
import { createAction } from "@reduxjs/toolkit";
import {Reducer, Action} from './startWebsocket';


/**
 * "The difference between a normal WebWorker and a SharedWorker is that the web worker
 * will create a new session in each tab or browser when loading the page,
 * whereas the shared worker will use the same session in each tab"
 * Many thanks to https://stackoverflow.com/questions/61865890/run-websocket-in-web-worker-or-service-worker-javascript
 * Turns out I was over-complicating things and should probably use a SharedWorker for websocket stuff.
 */


const connectedPorts:MessagePort[] = [];

//create new websocket
const socket = new WebSocket("ws://localhost:3001/ws");


//send something on open, might not need, we'll see.
socket.addEventListener('open', ()=>{
  const action = JSON.stringify({
    type: 'WebSocketOpen',
    payload: null
  })
  socket.send(action);
})

//send data from socket to all open tabs.
socket.addEventListener('message', (data:any) =>{
  const action = JSON.parse(data);
  connectedPorts.forEach(port=> port.postMessage(data));

});

/**
 * When a new thread is connected,
 * start listening from messaged from the new thread.
 */
self.addEventListener('connect', (e:MessageEvent<any> | Event)=>{
  const port = (e as MessageEvent).ports[0];
  //add new port to list of connected ports
  connectedPorts.push(port);

  /**
   * Receive data from main thread and determine which
   * actions it should take based on type
   */
  port.addEventListener('message', ({data}:MessageEvent<any>)=>{
    const {type, payload} = data;
    //send message to socket
    if (type === 'send'){
      socket.send(JSON.stringify(payload));
    }
    //remove port from connected port list
    else if (type === 'unload'){
      console.log("Worker unloaded.")
      const index = connectedPorts.indexOf(port);
      connectedPorts.splice(index, 1);
    }
  })
  //start port broadcasting
  port.start();
})






// interface WebSocketMessage {
//   "Type": string;
//   "Payload": Object
// }


// function connect(){
//   const ws = new WebSocket("ws://localhost:3001/ws");
//   function onOpenHandler(){
//     self.postMessage("WebSocket has opened.");
//   }
//   function onMessageHandler(e:MessageEvent<any>){
//     self.postMessage("Received message: " + e.data);
//   }
  
//   ws.onopen = onOpenHandler;
//   ws.onmessage = onMessageHandler;
//   return ws;
// }

// const ws = connect();
// //web worker iffee

//   //creates and connects ws to backend
  


// const reducer:Reducer = {
//   sendMessage(jsonStr:string){
//     ws.send(jsonStr);
//   }
// }


// function onMessageHandler(e:MessageEvent<Action>) {
//       if(reducer[e.data.type].length == e.data.payload.length){
//         let res = reducer[e.data.type].apply(self, e.data.payload);
//         if(res){
//           postMessage(res);
//         }
//       }
//       else{
//         console.warn("Invalid parameters passed to reducer function");
//       }
    
// }

// onmessage = onMessageHandler;





