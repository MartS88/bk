import React from 'react';
import s from './Card.module.scss'
import { bookItem } from "../../../types/bookItem";
import {setSelectedBook} from "../../../store/slice/bookSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Card = ({ book }: { book: bookItem }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const bookItemHander = (book: bookItem) => {
       dispatch(setSelectedBook(book))
       navigate('/card')
    }
    const handleImageError = (e:any) => {
        e.target.src = require('../../../assets/error.jpg')
    };
    return (
        <div
            onClick={() => bookItemHander(book)}
            className={s.card}>
            <div className={s.card_block}>
                <img

                    src={book?.volumeInfo?.imageLinks?.smallThumbnail}
                    width={150}
                    draggable={false}
                    alt={require('../../../assets/error.jpg')}
                />

                {book?.volumeInfo?.categories && (

                    <span className={s.categorie}>{book?.volumeInfo?.categories[0]}</span>
                )}

                <h2>{book?.volumeInfo?.title}</h2>

                <div className={s.authors}>
                    {book?.volumeInfo?.authors?.map((author, index) => (
                        <span className={s.author} key={index}>{author}</span>
                    ))}
                </div>







            </div>
        </div>
    );
};

export default Card;
