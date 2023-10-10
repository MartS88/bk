import {combineReducers, configureStore} from "@reduxjs/toolkit";
import bookReducer from './slice/bookSlice'


const rootReducer = combineReducers({
    book: bookReducer,

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



