import { createAction, PrepareAction } from "@reduxjs/toolkit";

type Reducer = {
  [index:string]: Function
}
type Action = {
  type:string;
  payload: Array<any>
}
export type {Reducer, Action};


let testAction = createAction("testFunction", (a:number, b:number)=>{
  return {payload: [a, b]};
});
let testWebSocketAction = createAction("testWebSocket", (str: string)=>{
  return {payload: [str]};
})
let sendMessage = createAction("sendMessage", (str: string)=>{
  return {payload: [str]};
})



const reducer:Reducer = {

}


export default function startWebSocket(){
  // function onMessage(this:Worker, e:MessageEvent<Action>){
  //     if(reducer[e.data.type].length == e.data.payload.length){
  //       reducer[e.data.type].apply(self, e.data.payload);
  //     }
  // }
  if(window.Worker){
    const wsWorker = new Worker(new URL("./wsWorker", import.meta.url));
    // wsWorker.onmessage = onMessage;
    
    const testObject = {
      gameID: "1234",
      action: {
        type: "action type test",
        payload: {
          a: "payload a",
          b: [1, 2, 3, 4],
          c: 2.147
        }
      }
    }

    wsWorker.postMessage(sendMessage(JSON.stringify(testObject)));
    console.log("message posted!");
    wsWorker.addEventListener('message', (e:MessageEvent<any>)=>{
      console.log("Result received: " + e.data);
    })

  }
  else {
    console.log("hey dingus, your browser jank");
  }
}

