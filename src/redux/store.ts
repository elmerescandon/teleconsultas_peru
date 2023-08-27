import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";


export const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production',
})

export type IState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;