import React, { useState, forwardRef, useEffect } from 'react'
import { pieceSVGMap, pieceMap } from '../../utils/constants'
import { ReactSVG } from 'react-svg';
import { DraggableCore, DraggableData, DraggableEvent, DraggableEventHandler } from 'react-draggable';
import Draggable from 'react-draggable';
interface PropTypes {
  pieceType: number;
  init_x: number;
  init_y: number;
  squareH: number;
  squareW: number;
  col: number;
  row: number;
}

//! TODOS: When resizing window, pieces don't adjust with the window


function Piece({ pieceType, init_x, init_y, squareH, squareW, col, row, ...props }: PropTypes, ref: any) {

  const h = squareH;          
  const w = squareW;
  const [position, updatePosition] = useState([0, 0]);

  const onStart:DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => {
    if(!(navigator.maxTouchPoints>0)){
      e = e as MouseEvent
      let rect = data.node.getBoundingClientRect();
      updatePosition([e.clientX - (rect.left + w/2), e.clientY - (rect.top + h/2)]);
    }
  }

  const onDrag:DraggableEventHandler = (e: DraggableEvent, data: DraggableData) =>{
    updatePosition([position[0] + data.deltaX, position[1] + data.deltaY]);
  }
   
  const onStop:DraggableEventHandler = (e: DraggableEvent, data: DraggableData) =>{
    updatePosition([0, 0]);
  }

  const svgStyling: string = `
  transform-origin: top left;
  transform: scale(${squareW / 45},${squareH / 45});
  `

  const beforeInjection = (svg: SVGElement) => {
    svg.setAttribute("style", svgStyling);
  }
  

  return (
    

    <Draggable
    ref={ref}
    position={{
      x: position[0],
      y: position[1]
    }}
    onStart={onStart}
    onDrag={onDrag}
    onStop={onStop}
    >
      <ReactSVG
      src={pieceSVGMap[pieceType]}
      beforeInjection={beforeInjection}
      />
    </Draggable>
  )
}


export default forwardRef<HTMLDivElement, PropTypes>(Piece);