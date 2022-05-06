import { createAction, createReducer, PayloadAction,createSelector} from "@reduxjs/toolkit"
import { RootState } from "./store";
import {AnyAction} from 'redux';



export interface MainStateType {
    isTouch: boolean;
    isFinePointer: boolean;
}

const initialState:MainStateType = {
    isTouch: false,
    isFinePointer: true
}







