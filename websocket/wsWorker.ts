//needs to export something to play nice w/ babel
import { createAction } from "@reduxjs/toolkit";
import {Reducer, Action} from './startWebsocket';





//web worker iffee
(function(){
  //creates and connects ws to backend
  function connect(){
    const ws = new WebSocket("ws://localhost:3001/ws");
    function onOpenHandler(){
      self.postMessage("WebSocket has opened.");
    }
    function onMessageHandler(e:MessageEvent<any>){
      self.postMessage("Received message: " + e.data);
    }
    
    ws.onopen = onOpenHandler;
    ws.onmessage = onMessageHandler;
    return ws;
  }
const ws = connect();


//reducer to handle messages sent in a redux-esque manner



const reducer:Reducer = {
  sendMessage(jsonStr:string){
    ws.send(jsonStr);
  }
}


function onMessageHandler(e:MessageEvent<Action>) {
      if(reducer[e.data.type].length == e.data.payload.length){
        let res = reducer[e.data.type].apply(self, e.data.payload);
        if(res){
          postMessage(res);
        }
      }
      else{
        console.warn("Invalid parameters passed to reducer function");
      }
    
}

onmessage = onMessageHandler;




})();