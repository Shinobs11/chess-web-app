import React,  { PureComponent, useEffect, useState } from 'react'
import internal from 'stream';
import styles from '../styles/Home.module.css';

interface PropsType{
    color: number;
    row: number;
    col: number;
}

const ChessSquare = React.forwardRef<HTMLDivElement, PropsType>(({color, row, col,...props}:PropsType, ref) => {
    const decidedColor = (color == 0) ? styles.squareColor0 : styles.squareColor1;
    return (
        <div 
            className={[styles.chessSquare, decidedColor].join(" ")}
            style={{
                gridRowStart:row,
                gridRowEnd: row+1,
                gridColumnStart: col,
                gridColumnEnd: col+1
            }}
            ref={ref}
        >

        </div>
    );
})

export default ChessSquare;