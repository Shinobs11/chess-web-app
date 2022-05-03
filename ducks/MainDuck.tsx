import { createAction, createSlice, createReducer, PayloadAction,createSelector} from "@reduxjs/toolkit"
import { RootState } from "./store";
import {AnyAction} from 'redux';



//*##########################
//*         Types
//*##########################
export interface MainStateType {
    ctr: number;
}

//*##########################
//*      Initial State
//*##########################
const initialState:MainStateType = {
    ctr:0,
}



//*##########################
//*         Slice
//*##########################
const testSlice = createSlice({
    name:'test',
    initialState,
    reducers:{
        increment(state:MainStateType){
            state.ctr++;
        },
        decrement(state:MainStateType){
            state.ctr--;
        },
        add(state:MainStateType, action: PayloadAction<number>){
            state.ctr+=action.payload;
        }

    }
})

export const {increment, decrement, add} = testSlice.actions;
export default testSlice.reducer;



//*##########################
//*         Selectors
//*##########################
const counter = (state:RootState) => state.main.ctr;
export const selectCounter = createSelector(
    counter,
    (x)=>{
        return x;
    }

)







