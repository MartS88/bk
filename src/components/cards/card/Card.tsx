import React from 'react';
import s from './Card.module.scss'
import {bookItem} from "../../../types/bookItem";
const Card = ({book}: { book: bookItem }) => {
    return (
        <div className={s.card}>
            <div className={s.card_block}>

                <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} width={150} draggable={false}/>

                <span>{book?.volumeInfo.authors && book?.volumeInfo?.authors[0]}</span>

                <h2> {book?.volumeInfo?.title}</h2>


                <p>
                {book?.volumeInfo?.description && book?.volumeInfo?.description.length > 300
                    ? book?.volumeInfo?.description.substring(0, 300) + "..."
                    : book?.volumeInfo?.description}
                </p>
            </div>

        </div>
    );
};

export default Card;