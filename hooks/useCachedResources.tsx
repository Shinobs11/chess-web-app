import { useEffect, useState } from "react";
import {store} from '../ducks/store';


export default function useCachedResources(){
  const [loading, complete] = useState(true);

  useEffect(()=>{
    //https://stackoverflow.com/questions/56324813/how-to-detect-touch-device-in-2019
    const isTouch = matchMedia('(hover: none)').matches;
    const isFinePointer = matchMedia('(pointer: fine)').matches;
   
    

    // store.dispatch(
      
    // )




  });






}