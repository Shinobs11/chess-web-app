import React, { PropsWithChildren, StyleHTMLAttributes } from 'react';
import { useState, useEffect, useRef, createRef, useLayoutEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';
import ChessSquare from './ChessSquare';
import TestPiece from '../components/pieces/TestPiece';
import Piece from './pieces/Piece';
import ChessGame from './ChessGame';
import { selectBoardState, selectActivePieces} from '../ducks/ChessDuck';
import {initialBoardState} from '../utils/constants';
import {ActivePiece} from '../types/ChessTypes';
import Button from './Button';

interface PropType {
    actionMap:{
        [index:string]: ()=>any
    }
}


function ChessBoard({actionMap,...props}:PropsWithChildren<PropType>) {
    const BOARD_HEIGHT = 800;
    const BOARD_WIDTH = 800;

    const styles:{[key:string]: React.CSSProperties} = {
        board:{
            height: BOARD_HEIGHT,
            width: BOARD_WIDTH,
            backgroundColor: 'red',
            top: 100,
            left: 100,
            display: 'grid',
            gridTemplateColumns: `repeat(8, ${BOARD_WIDTH/8}px)`,
            gridTemplateRows: `repeat(8, ${BOARD_HEIGHT/8}px)`
        }
    }
    

    const generateRefGrid = ()=>{
        let refGrid = (new Array(8)).fill(0).map(x=>Array(8).fill(0));  
        for(let i = 0; i<8; i++){
            for(let j = 0; j<8; j++){
                refGrid[i][j] = createRef<SVGElement>();
            }
        }
        return refGrid;
    }

    const renderSquareGrid = (refGrid:Array<Array<React.RefObject<any>>>) =>{
        const colList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const rowList = [1, 2, 3, 4, 5, 6, 7, 8];
        let grid = (new Array(64).fill(0));                                     
        for(let i = 0; i<8; i++){
            for(let j = 0; j<8; j++){ 
                grid[8*i+j] =
                <ChessSquare
                    key={colList[i] + rowList[j].toString()}
                    color={(i+j)%2}
                    col={i+1}
                    row={j+1}   
                    ref={refGrid[i][j]}
                />
            }
        }
        
        return {grid, refGrid};
    }

    const renderPieceOnToRef = (ref:React.RefObject<HTMLDivElement>, row: number, col:number, pieceType:number) =>{
        if(ref.current == null){
            return;
        }
        else{
            let pos = ref.current.getBoundingClientRect();
            return(
                createPortal(
                    <Piece
                    init_x={pos.x}
                    init_y={pos.y}
                    squareH={pos.height}
                    squareW={pos.width}
                    pieceType={pieceType}
                    col={col}
                    row={row}
                    />,
                    ref.current,
                    [row, col].join("")
                )
            )
        }
    }


    const [hasRendered, updateHasRendered] = useState(false);
    const [{grid, refGrid}, updateGrid] = useState(renderSquareGrid(generateRefGrid()));
    const activePieces = useSelector(selectActivePieces);
    //? So, I'm pretty sure state is meant to be immutable and map is a mutable data structure
    //? idk if this is a good idea
    const [renderedPieces, updateRenderedPieces] = useState(new Map<string, React.ReactPortal>());

    useEffect(()=>{
        updateHasRendered(true);
    }, [])

    useEffect(()=>{
        for(let i = 0; i<activePieces.length; i++){
            const pos = activePieces[i].position;
            const key = pos.join("");
            if(renderedPieces.has(key) !== true){
                const portal = renderPieceOnToRef(refGrid[pos[1]][pos[0]], pos[0], pos[1], activePieces[i].pieceType); //*refGrid[row][col]
                if(portal !== undefined){
                    updateRenderedPieces(renderedPieces.set(key, portal));
                }
            }
        }
    },[activePieces, hasRendered, refGrid, renderedPieces])


    
    return (
        <>
            <Button onClick={actionMap["CreateGame"]}>
                CreateGame
            </Button>
            <Button onClick={actionMap["WebSocketOpen"]}>
                WebSocketOpen
            </Button>
            <Button onClick={actionMap["CloseWebSocket"]}>
                CloseWebSocket
            </Button>
            <div
            style={styles.board}
            // className={styles.chessBoard}
            >
                {grid}
            </div>
            {
            Array.from(renderedPieces.values())
            }
        </>
    );
    
  
}

export default ChessBoard;