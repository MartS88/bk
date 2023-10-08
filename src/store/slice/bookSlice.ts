import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookSearchResult } from "../../types/bookSearch_types";

interface BookState {
    booksData: BookSearchResult | null;
    isLoading: boolean;
    isError: boolean;
}

const initialState: BookState = {
    booksData: null,
    isLoading: false,
    isError: false,
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
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setIsError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
    },
});

export const { addBookArr,setIsLoading, setIsError } = bookSlice.actions;

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
