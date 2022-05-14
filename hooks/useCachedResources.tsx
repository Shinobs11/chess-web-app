import { useEffect, useState } from "react";
import { workerData } from "worker_threads";
import {store} from '../ducks/store';


export default function useCachedResources(){
  const [isReady, complete] = useState(false);
  useEffect(()=>{
    //https://stackoverflow.com/questions/56324813/how-to-detect-touch-device-in-2019
    const isTouch = matchMedia('(hover: none)').matches;
    const isFinePointer = matchMedia('(pointer: fine)').matches;



    complete(true);
  }, [isReady]);

  return isReady;
}