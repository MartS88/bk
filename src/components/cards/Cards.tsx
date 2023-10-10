import React, {useEffect, useState} from 'react';
import s from './Cards.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {v4 as uuidv4} from 'uuid';
import Card from './card/Card';
import {ColorRing} from 'react-loader-spinner';
import {bookItem} from "../../types/bookItem";
import {useQuery, useQueryClient} from "react-query";
import {addBookArr} from "../../store/slice/bookSlice";
import NotConnected from "../error/NotConnected";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";



const Cards = () => {

    const loading = useSelector((state: RootState) => state.book.isLoading);
    const isError = useSelector((state: RootState) => state.book.isError);
    const bookData = useSelector((state: RootState) => state.book.booksData);
    const searchParams = useSelector((state: RootState) => state.book.searchParams);
    const [startIndex, setStartIndex] = useState(0)
    const [loader, setLoader] = useState(false)
    const queryClient = useQueryClient();
    const dispatch = useDispatch()

    const searchBooks = async () => {

        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes/?q=${searchParams?.search}+subject:${searchParams?.categoryOption}&maxResults=30&startIndex=${startIndex}&orderBy=${searchParams?.sortOption}&+&key=`
        );
        if (!response.ok) {
           console.log('Network response was not ok');
        }
        const data = await response.json();
        return data;
    };

    const handleLoadMoreClick = async () => {

            if (bookData && bookData?.totalItems !== undefined && startIndex <= bookData?.totalItems) {

            try {

                const responseData = await searchBooks();
                setStartIndex(startIndex + 30);
                dispatch(addBookArr({
                    ...bookData,
                    items: [...bookData.items, ...responseData.items]
                }));
                setLoader(true);
                setLoader(true);
                setTimeout(() => {
                    setLoader(false);
                }, 1000);


            } catch (error) {
                console.error('Error:', error);
            }
        }

    };


    const {data, error, isLoading} = useQuery('bookData', searchBooks);

    useEffect(() => {
        if (!isLoading && !isError && data) {
            queryClient.setQueryData('bookData', data);
        }
    }, [data, isError, isLoading]);


    const [scrollToStart, setScrollToStart] = useState(false);
    const [scrollToEnd, setScrollToEnd] = useState(false);

    const handleScrollToStart = () => {
        setScrollToStart(true);
        setScrollToEnd(false);
    };

    const handleScrollToEnd = () => {
        setScrollToStart(false);
        setScrollToEnd(true);
    };

    useEffect(() => {
        if (scrollToStart) {

            window.scrollTo(0, 0);
            setScrollToStart(false);
        }

        if (scrollToEnd) {

            const element = document.getElementById('end');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }

            setScrollToEnd(false);
        }
    }, [scrollToStart, scrollToEnd]);




    if (loading) {
        return <div className={s.cards}>

            <div className={s.color_ring}>
                <ColorRing
                    visible={true}
                    height="110"
                    width="110"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#fcefef', '#FFFFFFFF', '#c9c4c4', '#fcefef', '#FFFFFFFF']}
                />
            </div>
        </div>
    }

    if (isError) {
        return <><NotConnected/></>;
    }

    if (bookData) {

        return (
            <div className={s.cards}>

                <div className={s.cards_block}>
                    {bookData && bookData?.totalItems && (
                        <span>Found {bookData?.totalItems} results</span>
                    )}

                    <div className={s.start}
                         id='start'
                    >
                        <span onClick={handleScrollToEnd}> Read the latest Books  <AiOutlineArrowDown size={15} color='blue'/></span>

                    </div>

                    <div className={s.card_block}>

                        {bookData && bookData?.items && bookData?.items.map((book: bookItem) => (
                            <Card book={book} key={uuidv4()}/>
                        ))}
                    </div>

                    <div className={s.button_block}>

                        {loader && (

                            <div className={s.loader}>
                                <ColorRing
                                    visible={true}
                                    height="110"
                                    width="110"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#fcefef', '#FFFFFFFF', '#c9c4c4', '#fcefef', '#FFFFFFFF']}
                                />
                            </div>
                        )}



                        <div
                            className={s.end}
                            id='end'>

                            <div>
                                <span onClick={handleScrollToStart}>Read the top Books   <AiOutlineArrowUp size={15} color='blue'/></span>

                            </div>

                        </div>
                            <button onClick={handleLoadMoreClick} className={s.load_more_button}>Load more</button>
                    </div>

                </div>

            </div>
        );
    }

    return null;

};


export default Cards;




