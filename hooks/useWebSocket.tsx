import { unescape } from "querystring";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Serializable } from "worker_threads";
import type {ResponseType} from '../types/APITypes';




export default function useWebSocket() {
  const messageQueueInit:ResponseType[] = [];
  const [messageQueue, updateMessageQueue] = useState(messageQueueInit);

  const hasMessages = () => (messageQueue.length != 0);
  const popFromQueue = () =>{
    if(hasMessages()){
      const message = messageQueue[0];
      updateMessageQueue(messageQueue.slice(1));
      return message;
    }
    return undefined;
  }


  const sendMessageQueueRef = useRef<string[]>([]);


  const [reopen, setReopen] = useState(0);
  const ws = useRef<WebSocket | null>(null);
  
  

  useEffect(() => {
    const onOpen = () =>{
      console.log("WebSocket opened.");
    }
    const onMessage = (e:MessageEvent<any>) =>{
      const res = JSON.parse(Buffer.from(e.data, 'binary').toString());
      console.log(res);
      updateMessageQueue([...messageQueue, res]);
    }
    const onClose = () =>{
      console.log("WebSocket closed.");
      setReopen(reopen+1);
    }
    //yeah i don't know what i'm doing but this works so whatever
    ws.current = new WebSocket("ws://localhost:3001/ws");
    ws.current.onopen = onOpen;
    ws.current.onmessage = onMessage;
    ws.current.onclose = onClose;
  }, [reopen]);

  useEffect(()=>{
    if(ws.current?.readyState === ws.current?.OPEN){
      if(sendMessageQueueRef.current.length != 0){
        console.log("Message sent from queue");
        ws.current?.send(
          sendMessageQueueRef.current.pop() as string
        )
      }
    }
  }, [ws.current?.readyState])

  //   useEffect(() => {
  //     if (!ws.current) return;
  //     ws.current.onmessage = (e) => {
  //       if (isPaused) return;
  //       const message = JSON.parse(e.data);
  //       console.log("e", message);
  //     };
  //   }, [isPaused]);

  const sendJsonMessage = (msg: Serializable) => {
    if (ws.current) {
      if(ws.current.readyState != ws.current.OPEN){
        sendMessageQueueRef.current.push(JSON.stringify(msg));
        console.log("Message pushed to queue");
      }
      ws.current.send(JSON.stringify(msg));
    }
  };

  const closeWebsocket = () => {
    if (ws.current) {
      console.log("before", ws.current?.readyState);
      if (ws.current?.readyState == ws.current?.OPEN) {
        console.log("Attempting to close websocket");
        ws.current?.close();
      }
      console.log("after", ws.current?.readyState);
    }

    return;
  };

  return {
    sendJsonMessage,
    ws,
    closeWebsocket,
    messageQueue,
    popFromQueue,
    hasMessages
  };
}
