import { createSlice, createSelector, createReducer, createAction } from "@reduxjs/toolkit";
import React from 'react';
import { AnyAction } from "redux";
import ChessSquare from '../components/ChessSquare';
import {pieceMap, initialPiecePositions} from '../utils/constants';
import {RootState} from './store';



//*##########################
//*         Types
//*##########################
interface ChessBoardStateType {
    piecePositions: Array<Array<number>>;
}

const initialState:ChessBoardStateType = {
    piecePositions:initialPiecePositions
}


//okay I hate redux-toolkit



const chessReducer = createReducer(initialState, (builder) =>{

    }
)

export default chessReducer;

//*##########################
//*         Selectors
//*##########################
export const selectPiecePositionMap = (state:RootState) => state.chess.piecePositions;

