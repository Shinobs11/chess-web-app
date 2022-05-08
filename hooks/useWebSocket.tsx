import {useEffect, useState} from 'react';





// export default function useWebSocket(){
//   const [webSocket, updateWs] = useState();
  
//   try{
//       const ws = new WebSocket("localhost:3001");
//       while(ws !=)
//     }
//   catch(e){
//     console.warn(e);
//   }

//   ws.addEventListener('open', function(this:WebSocket, e:Event){
//     console.log("WebSocket opened!");
//     this.send("Hello Server!");
//   });

//   ws.addEventListener('message', function(this:WebSocket, e:MessageEvent<any>){
//     console.log("Message received!");
//     console.log(e.data);
//   });  
// }