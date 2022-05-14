import {useEffect, useState, useRef, useMemo, useCallback} from 'react';
import startWebSocket, {createGame} from '../websocket/startWebsocket';







enum ReadyState {
    UNINSTANTIATED = -1,
    CONNECTING = 0,
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3
}

type ReadyStateState = {
    [url:string]: ReadyState
}



export const useWebSocket = () => {
// const [lastMessage, setLastMessage] = useState<WebSocketEventMap['message']|null>(null);
// const [readyState, setReadyState] = useState<ReadyStateState>({});

// const lastJsonMessage = useMemo(()=>{
//     if(lastMessage){
//         try{
//             return JSON.parse(lastMessage.data);
//         }
//         catch(e){
//             return 
//         }
//     }
// })

const sharedWorkerRef = useRef<SharedWorker>(startWebSocket());
const startRef = useRef<()=>void>(()=>void 0);

const sendMessage = useCallback(
  (keep = true) => {
    sharedWorkerRef.current.port.postMessage({
        type:'send',
        payload: {
            type:'CreateGame',
            payload: null
        }
    })
  },
  [],
)






// const sendMessageToSocket = (message: any) => {
//     console.log("SendMessageToSocketCalled");
//     if(sharedWorkerRef.current){
//       sharedWorkerRef.current.port.postMessage({
//         type: 'send',
//         payload: message
//       })
//     }
//   }


// useEffect(()=>{
    
//     if(sharedWorkerRef.current != null){
//         sharedWorkerRef.current.port.start();
//         sendMessageToSocket(createGame());
//     }
    
// }, [sharedWorkerRef])

return {
    sendMessage,
}

}
