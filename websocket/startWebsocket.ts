import { createAction, PrepareAction } from "@reduxjs/toolkit";




let testAction = createAction("testFunction", (a:number, b:number)=>{
  return {payload: [a, b]};
});
let testWebSocketAction = createAction("testWebSocket", (str: string)=>{
  return {payload: str};
})

export default function startWebSocket(){
  

  if(window.Worker){
    const wsWorker = new Worker("worker.js");
    wsWorker.postMessage(testAction(5, 3));
    console.log("message posted!");
    wsWorker.addEventListener('message', (e:MessageEvent<any>)=>{
      console.log("Result received: " + e.data);
    })

  }
  else {
    console.log("hey dingus, your browser jank");
  }
}

