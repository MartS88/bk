import React from 'react';
import s from './Cards.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {v4 as uuidv4} from 'uuid';
import Card from './card/Card';
import {BookSearchResult} from "../../types/bookSearch_types";
import {ColorRing} from "react-loader-spinner";

const Cards = () => {

    const booksArr: BookSearchResult | null = useSelector(
        (state: RootState) => state.book.booksData
    );

    const booksItems = booksArr?.items
    const isLoading = useSelector((state: RootState) => state.book.isLoading);


    {  console.log('books', booksArr?.items)}



    return (

        <div className={s.cards}>

            { booksArr?.totalItems === 0 ? (

                <h2 className={s.error}>We dint found any books</h2>

            ) : isLoading  ? (

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

            ) : (

                <div className={s.cards_block}>

                <div>

                    {booksArr && booksArr?.totalItems > 0  && (
                        <span>
                        Found {booksArr?.totalItems} results
                    </span>
                    )}
                </div>
                <div className={s.card_block}>
                    {booksItems && booksItems?.map((book) => (
                        <Card book={book} key={uuidv4()} />

                    ))}
                </div>
            </div>
            )}
        </div>
    );
};

export default Cards;



