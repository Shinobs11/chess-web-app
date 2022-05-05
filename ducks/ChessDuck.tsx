import { createSlice, createSelector, createReducer, createAction } from "@reduxjs/toolkit";
import React from 'react';
import { AnyAction } from "redux";
import ChessSquare from '../components/ChessSquare';
import {initialBoardState, initialActivePieces} from '../utils/constants';
import {RootState} from './store';
import {ActivePiece} from '../types/ChessTypes';


//*##########################
//*         Types
//*##########################

interface ChessBoardStateType {
    boardState: Array<Array<number>>;
    activePieces: Array<ActivePiece>;
}

const initialState:ChessBoardStateType = {
    boardState:initialBoardState,
    activePieces: initialActivePieces
}


//okay I hate redux-toolkit



const chessReducer = createReducer(initialState, (builder) =>{

    }
)

export default chessReducer;

//*##########################
//*         Selectors
//*##########################
export const selectBoardState = (state:RootState) => state.chess.boardState;
export const selectActivePieces = (state:RootState) => state.chess.activePieces;
