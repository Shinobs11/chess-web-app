import React, {useState, forwardRef} from 'react'
import {pieceSVGMap, pieceMap} from '../../utils/constants'
import { ReactSVG } from 'react-svg';
import styles from '../../styles/Home.module.css';
interface PropTypes{
  pieceType: number;
  init_x: number;
  init_y: number;
  squareH: number;
  squareW: number;
}




function Piece({pieceType, init_x, init_y, squareH, squareW,...props}:PropTypes, ref:any) {
  
  const h = squareH;
  const w = squareW;
  const [position, updatePosition] = useState([init_x-h/2, init_y-w/2]);

  const onDrag = (e:React.DragEvent) =>{    
    updatePosition([e.clientX - w/2, e.clientY - h/2]);
    
  }
  const onDragEnd = (e:React.DragEvent)=>{
    updatePosition([init_x - w/2, init_y - h/2]);
  }

  const beforeInjection = (svg:SVGElement) =>{
    console.log(svg.getAttribute("style"));
  }
  const afterInjection = (error:any, svg:SVGElement) =>{
    console.log(svg.getAttribute("style"));
  }

    return (
      <div 
      style={{
            left: position[0],
            top: position[1],
            height: h,
            width: w,
            position: "absolute"
        }}
      ref={ref}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      >
        <ReactSVG 
        src={pieceSVGMap[pieceType]}
        beforeInjection={beforeInjection}
        afterInjection={afterInjection}
        />
      </div>
      )
}

export default forwardRef<HTMLDivElement, PropTypes>(Piece);