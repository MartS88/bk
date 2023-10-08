import {combineReducers, configureStore} from "@reduxjs/toolkit";
import bookReducer from './slice/bookSlice'
import {booksApi} from "../services/booksApi";

const rootReducer = combineReducers({
    book: bookReducer,
    [booksApi.reducerPath]: booksApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(booksApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



