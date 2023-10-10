import React from 'react';
import s from './Card.module.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {useNavigate} from 'react-router-dom';
import {AiOutlineClose} from "react-icons/ai";


const CardItem = () => {
    const navigate = useNavigate();
    const book = useSelector((state: RootState) => state.book.selectedBook);


    return (
        <div className={s.card}>
            {book !== null && (
                <>

                    <div className={s.img_block}>

                        <img
                            src={book?.volumeInfo?.imageLinks?.smallThumbnail}
                            draggable={false}
                            alt={book?.volumeInfo?.title}
                        />

                    </div>

                    <div className={s.about_block}>
                        <AiOutlineClose onClick={() => navigate('/home')}/>

                        <div>

                            {book?.volumeInfo?.categories && book?.volumeInfo?.categories.map((categorie: string) => (
                                <span key={book?.id} className={s.categorie}>Category: {categorie}</span>

                            ))}

                            <div className={s.authors}>
                                {book?.volumeInfo?.authors?.length > 1 ? (
                                    <>
                                        <label>Authors :</label>
                                        {book?.volumeInfo?.authors?.map((author, index) => (
                                            <span key={index}>{author}</span>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        <label>Author :</label>
                                        <span>{book?.volumeInfo?.authors?.[0]}</span>
                                    </>
                                )}
                            </div>


                            <h2 className={s.title}>{book?.volumeInfo?.title}</h2>

                            <p className={s.description}>
                                {book?.volumeInfo?.description && (
                                    book?.volumeInfo?.description.length > 500 ? (
                                        <>
                                            {book?.volumeInfo?.description.substring(0, 500)}...

                                            <a href={book?.volumeInfo?.previewLink} target="_blank" rel="noopener noreferrer">
                                            <span className={s.readmore}>Read more</span>

                                            </a>
                                        </>
                                    ) : book?.volumeInfo?.description
                                )}
                            </p>

                            <span className={s.publisher}>Publisher : {book?.volumeInfo?.publisher}</span>
                            <span className={s.total_pages}>Total pages : {book?.volumeInfo?.pageCount}</span>


                        </div>
                    </div>

                </>
            )}
        </div>
    );
};

export default CardItem;