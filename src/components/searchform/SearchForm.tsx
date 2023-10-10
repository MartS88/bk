import React, {useEffect, useState} from 'react';
import s from './SearchForm.module.scss';
import {SELECT_OPTIONS, SORT_SELECT_OPTIONS} from '../../constants/constants';
import {addBookArr, setIsError, setIsLoading, setSearchParams} from '../../store/slice/bookSlice'
import {useDispatch} from "react-redux";
import {FcSearch} from 'react-icons/fc';
import { useQuery,useQueryClient } from 'react-query';



const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [categoryOption, setCategoryOption] = useState(SELECT_OPTIONS[0].value);
    const [sortOption, setSortOption] = useState(SORT_SELECT_OPTIONS[0].value);
    const [startIndex, setStartIndex] = useState(0);
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const categoryHandleChange = (e: any) => {
        setCategoryOption(e.target.value);

    };

    const sortHandleChange = (e: any) => {
        setSortOption(e.target.value);

    };

    const searchBooks = async () => {

        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes/?q=${search}+subject:${categoryOption}&maxResults=30&startIndex=${startIndex}&orderBy=${sortOption}&+&key=`
        );
        console.log('cat', categoryOption)
        console.log('opt,' , sortOption)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    };

    const { data, isError, isLoading } = useQuery('bookData', searchBooks);

    useEffect(() => {
        if (!isLoading && !isError && data) {
            queryClient.setQueryData('bookData', data);
        }
    }, [data, isError, isLoading]);

    const handleKeyPress = async (e: any) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = async () => {
        dispatch(setIsLoading(true));
        dispatch(setIsError(false));
        try {
            const responseData = await searchBooks();
            dispatch(addBookArr(responseData));
            queryClient.setQueryData('bookData', responseData);
            dispatch(
                setSearchParams({ search, categoryOption, sortOption, startIndex: 0 })
            );
            setSearch('');
            setStartIndex(0);
        } catch (error) {
            console.error('Error:', error);
            dispatch(setIsError(true));
        } finally {
            dispatch(setIsLoading(false));
        }
    };


    return (
        <div className={s.search_form}>

            <div className={s.search_block}>

                <h2>Find your book</h2>

                <div className={s.input_block}>

                    <input
                        type="text"
                        placeholder="Enter the book name"
                        value={search}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        onKeyDown={handleKeyPress}

                    />


                    <FcSearch/>

                    <div className={s.button_block}>

                        <button onClick={handleSearch}>Search</button>


                    </div>


                </div>

                <div className={s.select_block}>

                    <label>Categories</label>
                    <select
                        className={s.categories}
                        value={categoryOption}
                        onChange={categoryHandleChange}
                    >
                        {SELECT_OPTIONS.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                onChange={sortHandleChange}
                            >
                                {option.name}
                            </option>
                        ))}

                    </select>

                    <label>Sort by</label>

                    <select
                        className={s.relevance}
                        value={sortOption}
                        onChange={sortHandleChange}
                    >

                        {SORT_SELECT_OPTIONS.map((option) => (

                            <option key={option.value} value={option.value}>
                                {option.name}
                            </option>

                        ))}

                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;








//
//
//
//
// const [search, setSearch] = useState('');
// const [categoryOption, setCategoryOption] = useState(SELECT_OPTIONS[0].value);
// const [sortOption, setSortOption] = useState(SORT_SELECT_OPTIONS[0].value)
// const [startIndex, setStartIndex] = useState(0)
// const dispatch = useDispatch()
// const queryClient = useQueryClient();
//
//
// const categoryHandleChange = (e: any) => {
//     setCategoryOption(e.target.value);
// };
//
// const sortHandleChange = (e: any) => {
//     setSortOption(e.target.value)
//     console.log(e.target.value)
// }
//
// const searchBooks = async () => {
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes/?q=${search}+subject:${categoryOption}&maxResults=40&startIndex=${startIndex}&orderBy=${sortOption}&+&key=`);
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
// };
//
// const { data, isError, isLoading } = useQuery('bookData', searchBooks);
//
//
// useEffect(() => {
//     if (!isLoading && !isError && data) {
//         queryClient.setQueryData('bookData', data);
//     }
// }, [data, isError, isLoading]);
//
// const handleKeyPress = async (e: any) => {
//     if (e.key === 'Enter') {
//         dispatch(setIsLoading(true));
//         try {
//             const responseData = await searchBooks();
//             dispatch(addBookArr(responseData));
//             queryClient.setQueryData('bookData', responseData);
//             setSearch('');
//             setStartIndex(0);
//         } catch (error) {
//             console.error('Error:', error);
//             dispatch(setIsError(true));
//             dispatch(setIsLoading(false));
//         }
//     }
// };
//
// if (isLoading) {
//     dispatch(setIsLoading(true));
//     dispatch(setIsError(false));
// } else if (isError) {
//     dispatch(setIsLoading(false));
//     dispatch(setIsError(true));
// } else {
//     dispatch(setIsLoading(false));
//     dispatch(setIsError(false));
//
// }
// const handleSearch = async () => {
//     dispatch(setIsLoading(true));
//     dispatch(setIsError(false));
//     try {
//         const responseData = await searchBooks();
//         dispatch(addBookArr(responseData));
//         queryClient.setQueryData('bookData', responseData); // Обновляем данные запроса
//         dispatch(setSearchParams({ search, categoryOption, sortOption, startIndex: 0 }));
//         setSearch('');
//         setStartIndex(0);
//     } catch (error) {
//         console.error('Error:', error);
//         dispatch(setIsError(true));
//         dispatch(setIsLoading(false));
//     }
// };
//
















// const [search, setSearch] = useState('');
// const [categoryOption, setCategoryOption] = useState(SELECT_OPTIONS[0].value);
// const [sortOption, setSortOption] = useState(SORT_SELECT_OPTIONS[0].value)
// const [startIndex, setStartIndex] = useState(0)
//
//
// const dispatch = useDispatch()
// const { data: bookData, isError, isLoading } = useGetBookQuery({
//     search: search,
//     categoryOption: categoryOption,
//     sortOption: sortOption,
//     startIndex: 0,
// });
//
//
// if (isLoading) {
//     dispatch(setIsLoading(true));
//     dispatch(setIsError(false));
// } else if (isError) {
//     dispatch(setIsLoading(false));
//     dispatch(setIsError(true));
// } else {
//     dispatch(setIsLoading(false));
//     dispatch(setIsError(false));
//
// }
//
//
// const categoryHandleChange = (e: any) => {
//     setCategoryOption(e.target.value);
// };
//
// const sortHandleChange = (e: any) => {
//     setSortOption(e.target.value)
// }
// const handleKeyPress = (e:any) => {
//     if (e.key === 'Enter'){
//         dispatch(setIsLoading(true));
//         dispatch(addBookArr(bookData));
//         dispatch(setSearchParams({ search: search, categoryOption: categoryOption, sortOption: sortOption , startIndex: 0 }));
//         setSearch('')
//         setStartIndex(0)
//     }
// }
//
// const handleSearch = () => {
//     dispatch(setIsLoading(true));
//     dispatch(setIsError(false));
//     dispatch(addBookArr(bookData));
//     dispatch(setSearchParams({ search: search, categoryOption: categoryOption, sortOption: sortOption , startIndex: 0 }));
//     setSearch('')
//     setStartIndex(0)
//
// }