import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {GetBookParams} from "../types/search_types";


const baseUrl = 'https://www.googleapis.com/books/v1/volumes';


export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {

            return headers;
        },
    }),
    endpoints: (builder) => ({
        GetBook: builder.query<any,GetBookParams>({
            query: ({search,categoryOption,sortOption,startIndex}) => `?q=${search}+subject:${categoryOption}&maxResults=40&startIndex=${startIndex}&orderBy=${sortOption}&+&key=`

}),
    })
});

export const {
    useGetBookQuery
} = booksApi;



// query: ({search,categoryOption,sortOption}) => `?q=${search}+subject:${categoryOption}&maxResults=40&startIndex=0&orderBy=${sortOption}&+&key=`
// const startIndex = MAX_RESULTS * page;