import React, {useEffect, useState} from 'react';
import s from './SearchForm.module.scss';
import {SELECT_OPTIONS, SORT_SELECT_OPTIONS} from '../../constants/constants';
import {useGetBookQuery} from "../../services/booksApi";
import {addBookArr, setIsError, setIsLoading, setSearchParams} from '../../store/slice/bookSlice'
import {useDispatch, useSelector} from "react-redux";
import {FcSearch} from 'react-icons/fc';
import {RootState} from "../../store/store";



const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [categoryOption, setCategoryOption] = useState(SELECT_OPTIONS[0].value);
    const [sortOption, setSortOption] = useState(SORT_SELECT_OPTIONS[0].value)
    const [startIndex, setStartIndex] = useState(0)


    const dispatch = useDispatch()
    const { data: bookData, isError, isLoading } = useGetBookQuery({
        search: search,
        categoryOption: categoryOption,
        sortOption: sortOption,
        startIndex: 0,
    });


    if (isLoading) {
        dispatch(setIsLoading(true));
        dispatch(setIsError(false));
    } else if (isError) {
        dispatch(setIsLoading(false));
        dispatch(setIsError(true));
    } else {
        dispatch(setIsLoading(false));
        dispatch(setIsError(false));

    }


    const categoryHandleChange = (e: any) => {
        setCategoryOption(e.target.value);
    };

    const sortHandleChange = (e: any) => {
        setSortOption(e.target.value)
    }
    const handleKeyPress = (e:any) => {
        if (e.key === 'Enter'){
            dispatch(setIsLoading(true))
            dispatch(addBookArr(bookData));
            dispatch(setSearchParams({ search: search, categoryOption: categoryOption, sortOption: sortOption , startIndex: 0 }));
            setSearch('')
            setStartIndex(0)
        }
    }

    const handleSearch = () => {
        dispatch(setIsLoading(true));
        dispatch(setIsError(false));
        dispatch(addBookArr(bookData));
        dispatch(setSearchParams({ search: search, categoryOption: categoryOption, sortOption: sortOption , startIndex: 0 }));
        setSearch('')
        setStartIndex(0)

    }


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

