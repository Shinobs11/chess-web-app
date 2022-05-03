import React from 'react';
import { useState, useEffect, useRef, createRef, useLayoutEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';
import ChessSquare from './ChessSquare';
import TestPiece from '../components/pieces/TestPiece';
import { postData } from '../game/http';
import { selectPiecePositionMap} from '../ducks/ChessDuck';




function ChessBoard({...props}) {
    const generateRefGrid = ()=>{
        let refGrid = (new Array(8)).fill(0).map(x=>Array(8).fill(0));  
        for(let i = 0; i<8; i++){
            for(let j = 0; j<8; j++){
                refGrid[i][j] = createRef<HTMLDivElement>();
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
    const renderPieceOnToRef = (ref:React.RefObject<HTMLDivElement>) =>{
        if(ref.current == null){
            return;
        }
        else{
            let pos = ref.current.getBoundingClientRect();
            
            return(
                createPortal(
                    <TestPiece
                    init_x={pos.x + pos.width/2}
                    init_y={pos.y + pos.height/2}
                    />,
                    ref.current
                )
            )
        }
    }
    const [{grid, refGrid}, updateGrid] = useState(renderSquareGrid(generateRefGrid()));

    let initialPieces: (React.ReactPortal|undefined)[] = [];
    const [renderedPieces, updateRenderedPieces] = useState(initialPieces);

    useEffect(()=>{
        console.log("Effect run");
        
        updateRenderedPieces([...renderedPieces, renderPieceOnToRef(refGrid[3][3])]);
    },[])

    return (
        <>
        <div  className={styles.chessBoard}>
            {grid}
            {/* <TestPiece row={0}column={0}/> */}
            {renderedPieces}
           
        </div>
        </>
    );
}

export default ChessBoard;