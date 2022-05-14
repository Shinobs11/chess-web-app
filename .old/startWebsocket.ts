import { createAction, PrepareAction } from "@reduxjs/toolkit";
import { MutableRefObject } from "react";
SharedWorker
type Reducer = {
  [index: string]: Function
}
type Action = {
  type: string;
  payload: Array<any>
}
export type { Reducer, Action };


let testAction = createAction("testFunction", (a: number, b: number) => {
  return { payload: [a, b] };
});
let testWebSocketAction = createAction("testWebSocket", (str: string) => {
  return { payload: [str] };
})
export const createGame = createAction("CreateGame", () => {
  return { payload: undefined };
})



const reducer: Reducer = {

}
function startWebSocket(){


  // sharedWorkerRef.current = new SharedWorker(new URL("./wsWorker", import.meta.url));

  
  
  // sharedWorkerRef.current.addEventListener('error', (e: ErrorEvent) => {
  //   console.warn("Worker error:" + e.error);
  //   console.log("Message associated with error" + e.message);
  // })

  // sharedWorkerRef.current.port.addEventListener('message', ({ data }) => {
  //   console.log("Data received from worker: " + data);
  // });
  // window.addEventListener('beforeunload', () => {
  //   if(sharedWorkerRef.current){
  //   console.log("Worker unload message sent");
  //   sharedWorkerRef.current.port.postMessage({
  //     type: 'unload',
  //     payload: null
  //   })
  //   sharedWorkerRef.current.port.close();
  // }
  // })
  
  const wsWorker = new SharedWorker(new URL("./wsWorker", import.meta.url), {
    type:"module"
  });
  
  
  wsWorker.addEventListener('error', (e: ErrorEvent) => {
    console.warn("Worker error:" + e.error);
    console.log("Message associated with error" + e.message);
  })

  wsWorker.port.addEventListener('message', ({ data }) => {
    console.log("Data received from worker: " + data);
  });
  wsWorker.port.start();
 
  window.addEventListener('beforeunload', () => {
    if(wsWorker){
    console.log("Worker unload message sent");
    wsWorker.port.postMessage({
      type: 'unload',
      payload: null
    })
    wsWorker.port.close();
  }
  })
    

  // return sharedWorkerRef;
  return wsWorker;
  
}

export default startWebSocket;

// export default class WebSocketWorker{
//   wsWorker
//   createGame = createGame;
//   constructor() {
//       this.wsWorker = new SharedWorker(new URL("./wsWorker", import.meta.url));

//       this.wsWorker.addEventListener('error', (e: ErrorEvent) => {
//         console.warn("Worker error:" + e.error);
//         console.log("Message associated with error" + e.message);
//       })

//       this.wsWorker.port.addEventListener('message', ({ data }) => {
//         console.log("Data received from worker: " + data);
//       })

//       this.wsWorker.port.start();
//       window.addEventListener('beforeunload', () => {
//         console.log("Worker unload message sent");
//         this.wsWorker.port.postMessage({
//           type: 'unload',
//           payload: null
//         })
//         this.wsWorker.port.close();
//       })
  
//   }

//   sendMessageToSocket(message: any) {
//     this.wsWorker.port.postMessage({
//       type: 'send',
//       payload: message
//     })
//   }


// }

