import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './MainDuck';
import chessReducer from './ChessDuck';


export const store = configureStore({
    reducer:{
        main: mainReducer,
        chess: chessReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
