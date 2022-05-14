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
    gameState: string
    boardState: Array<Array<number>>;
    activePieces: Array<ActivePiece>;
}

const initialState:ChessBoardStateType = {
    gameState: "",
    boardState: initialBoardState,
    activePieces: initialActivePieces
}


export const updateGameState = createAction<string>("chess/UpdateGameState");


const chessReducer = createReducer(initialState, (builder) =>{
    builder.addCase(updateGameState, (state, {payload})=>{
      return {...state, gameState:payload};
    })
    }
)

export default chessReducer;

//*##########################
//*         Selectors
//*##########################
export const selectBoardState = (state:RootState) => state.chess.boardState;
export const selectActivePieces = (state:RootState) => state.chess.activePieces;
export const selectGameState = (state:RootState) => state.chess.gameState;
