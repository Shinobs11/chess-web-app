import React, {useState, forwardRef, useEffect} from 'react'
import {pieceSVGMap, pieceMap} from '../../utils/constants'
import { ReactSVG } from 'react-svg';


interface PropTypes{
  pieceType: number;
  init_x: number;
  init_y: number;
  squareH: number;
  squareW: number;
  col: number;
  row: number;
}

//! Bug fix: When resizing window, pieces don't adjust with the window


function Piece({pieceType, init_x, init_y, squareH, squareW, col, row,...props}:PropTypes, ref:any) {

  const h = squareH;
  const w = squareW;
  const [position, updatePosition] = useState([init_x, init_y]);

  const onDrag = (e:React.DragEvent) =>{    
    updatePosition([e.clientX, e.clientY]);
    
  }
  const onDragEnd = (e:React.DragEvent)=>{
    updatePosition([init_x, init_y]);
  }

  const svgStyling: string = `
  transform-origin: top left;
  transform: scale(${squareW/45},${squareH/45});
  `

  const beforeInjection = (svg:SVGElement) =>{
    svg.setAttribute("style", svgStyling);
  }
  // const afterInjection:any = (err: any, svg:SVGElement) =>{
  //   if(err){
  //     console.warn(err);
  //   }
  //   svg.setAttribute("transform", `scale(${squareW/45},${squareH/45})`);
  //   svg.setAttribute("style", `top:${init_y}; left:${init_x};`);
  //   }
  
    return (
      <div
   
        ref={ref}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      >
        <ReactSVG
        
          src={pieceSVGMap[pieceType]}
          beforeInjection={beforeInjection}
          // afterInjection={afterInjection}
          wrapper='div'
        />
      </div>
      )
}


export default forwardRef<HTMLDivElement, PropTypes>(Piece);