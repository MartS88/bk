import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BookSearchResult} from "../../types/bookSearch_types";
import {bookItem} from "../../types/bookItem";
import {GetBookParams} from "../../types/search_types";

interface BookState {
    booksData: BookSearchResult | null;
    isLoading: boolean;
    isError: boolean;
    selectedBook: bookItem | null;
    startIndex: number,
    searchParams: GetBookParams | null,
    searchMode: boolean;
    updatedMode: boolean;
}

const initialState: BookState = {
    booksData: null,
    isLoading: false,
    isError: false,
    selectedBook: null,
    startIndex: 0,
    searchParams: null,
    searchMode: false,
    updatedMode: false,

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
        setStartIndex:(state,action: PayloadAction<number>)=>{
            state.startIndex = action.payload
        }

    },
});

export const {
    addBookArr,
    setSelectedBook,
    setIsLoading,
    setIsError,
    setSearchParams,
    setStartIndex,

} = bookSlice.actions;

export default bookSlice.reducer;


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
//
// interface BookState {
//     booksArr: any[];
//
// }
//
// const initialState: BookState = {
//     booksArr: [],
//
// };
//
// const bookSlice = createSlice({
//     name: "books",
//     initialState,
//     reducers: {
//         addBookArr: (state, action: PayloadAction<any[]>) => {
//             state.booksArr = action.payload;
//         },
//         setSelectedBook: (state, action: PayloadAction<any[]>) => {
//
//         }
//
//     },
// });
//
// export const { addBookArr } = bookSlice.actions;
//
// export default bookSlice.reducer;
//
//
//
