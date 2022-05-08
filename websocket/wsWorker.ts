// onmessage = function(e){
//   console.log("Worker received message from main script");
//   const result = e.data[0] + e.data[1];
//   if(isNaN(result)){
//     this.postMessage('Please write two numbers');
//   }
//   else {
//     const workerResult = "Result: " + result;
//     console.log("Worker: Positing message back to main script");
//     this.postMessage(workerResult);
//   }
// }
export type {}

// const cacheName = "::chessWebSocketWorker";
// const version = "v0.0.1";





//ifee to create websocket
(function(){
  function connect(){
    const ws = new WebSocket("ws://localhost:3001/ws");
    function onOpen(){
      self.postMessage("WebSocket has opened.");
    }
    function onMessage(e:MessageEvent<any>){
      self.postMessage("Received message: " + e.data);
    }
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
    return ws;
  }
const ws = connect();

interface Reducer{
  [index:string]: Function
}

const reducer:Reducer = {
  
  testFunction: function (a:number, b:number) {
    return a+b;
  },
  testWebSocket: function (str:string){
    ws.send(str);
  }

}

interface Action{
  type: string;
  payload: Array<any>;
}

onmessage = function (e:MessageEvent<Action>) {
      if(reducer[e.data.type].length == e.data.payload.length){
        let res = reducer[e.data.type].apply(this, e.data.payload);
        postMessage(res);
      }
      else{
        console.warn("Invalid parameters passed to reducer function");
      }
    
}





})();