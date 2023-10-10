import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BookSearchResult} from "../../types/BookSearchResult";
import {bookItem} from "../../types/bookItem";
import {GetBookParams} from "../../types/GetBookParams";

interface BookState {
    booksData: BookSearchResult | null;
    isLoading: boolean;
    isError: boolean;
    selectedBook: bookItem | null;
    startIndex: number,
    searchParams: GetBookParams | null,

}

const initialState: BookState = {
    booksData: null,
    isLoading: false,
    isError: false,
    selectedBook: null,
    startIndex: 0,
    searchParams: null,


};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBookArr: (state, action: PayloadAction<BookSearchResult>) => {
            state.booksData = action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        setSelectedBook: (state, action: PayloadAction<bookItem>) => {
            state.selectedBook = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setIsError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setSearchParams:(state,action: PayloadAction<GetBookParams>)=>{
            state.searchParams = action.payload
        },
    },
});

export const {
    addBookArr,
    setSelectedBook,
    setIsLoading,
    setIsError,
    setSearchParams,


} = bookSlice.actions;

export default bookSlice.reducer;

