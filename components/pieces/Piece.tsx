import React, {
  useState,
  forwardRef,
  useEffect,
  MutableRefObject,
  ForwardedRef,
} from "react";
import {
  pieceSVGMap,
  pieceMap,
  pieceTagsFromNumber,
} from "../../utils/constants";
import { ReactSVG } from "react-svg";
import Chess_bdt45 from "../../public/Chess_bdt45.svg";
import {
  DraggableCore,
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from "react-draggable";
import Draggable from "react-draggable";

interface PropTypes {
  pieceType: number;
  init_x: number;
  init_y: number;
  squareH: number;
  squareW: number;
  col: number;
  row: number;
}

// TODOS: When resizing window, pieces don't adjust with the window

function Piece(
  {
    pieceType,
    init_x,
    init_y,
    squareH,
    squareW,
    col,
    row,
    ...props
  }: PropTypes,
  ref: any
) {
  const h = squareH;
  const w = squareW;
  const [position, updatePosition] = useState([0, 0]);

  const onStart: DraggableEventHandler = (
    e: DraggableEvent,
    data: DraggableData
  ) => {
    if (!(navigator.maxTouchPoints > 0)) {
      e = e as MouseEvent;
      let rect = data.node.getBoundingClientRect();
      updatePosition([
        e.clientX - (rect.left + w / 2),
        e.clientY - (rect.top + h / 2),
      ]);
    }
  };

  const onDrag: DraggableEventHandler = (
    e: DraggableEvent,
    data: DraggableData
  ) => {
    updatePosition([position[0] + data.deltaX, position[1] + data.deltaY]);
  };

  const onStop: DraggableEventHandler = (
    e: DraggableEvent,
    data: DraggableData
  ) => {
    updatePosition([0, 0]);
  };


  const style: { [index: string]: React.CSSProperties } = {
    svgStyle: {
      transformOrigin: `top left`,
      transform: `scale(${squareW / 45}, ${squareH / 45})`,
    }
  };

  const PieceIcon = (ref: any) => {
    const Icon = pieceSVGMap[pieceType];
    return <Icon style={style["svgStyle"]} />;
  };

  return (
    <Draggable
      position={{
        x: position[0],
        y: position[1],
      }}
      onStart={onStart}
      onDrag={onDrag}
      onStop={onStop}
    >
      <div>
        <PieceIcon />
      </div>
    </Draggable>
  );
}

export default forwardRef<SVGElement, PropTypes>(Piece);
