import React, {useState} from 'react';
import s from './Cards.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {v4 as uuidv4} from 'uuid';
import Card from './card/Card';
import {BookSearchResult} from '../../types/bookSearch_types';
import {ColorRing} from 'react-loader-spinner';
import {BiCommentError} from 'react-icons/bi';
import {useGetBookQuery} from "../../services/booksApi";
import {bookItem} from "../../types/bookItem";


const Cards = () => {


    const dispatch = useDispatch();

    const booksArr: BookSearchResult | null = useSelector(
        (state: RootState) => state.book.booksData
    );
    const booksItems = booksArr?.items;
    const [startIndex, setStartIndex] = useState(0)
    const searchParams = useSelector((state: RootState) => state.book.searchParams);
    const [showBooksImmediately, setShowBooksImmediately] = useState(false)

    const {data: updatedBookData, isLoading} = useGetBookQuery({
        ...searchParams,
        startIndex: startIndex,
    });
    console.log('da', updatedBookData)


    const handleLoadMoreClick = () => {
        if (booksArr && booksArr?.totalItems !== undefined && startIndex < booksArr?.totalItems) {
            setStartIndex(startIndex + 30)
            console.log('updatedBookData', updatedBookData)
        }


    }

    const visibleBooks = booksItems?.slice(0, startIndex);


    return (
        <div className={s.cards}>

            {(booksArr?.totalItems === 0 || updatedBookData?.length === 0) && !showBooksImmediately ? (
                <div className={s.error}>
                    <h2>No books found. Please try again.</h2>
                    <BiCommentError/>
                </div>
            ) : isLoading ? (
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
                        {booksArr && booksArr?.totalItems !== undefined && booksArr && booksArr?.totalItems > 0 && (
                            <span>Found {booksArr?.totalItems} results</span>
                        )}
                    </div>
                    <div className={s.card_block}>
                        {booksArr && booksArr?.items.map((book: bookItem) => (
                            <Card book={book} key={uuidv4()}/>
                        ))}
                    </div>
                    {visibleBooks && visibleBooks.length < (booksArr?.totalItems || 0) && (
                        <button className={s.load_more_button} onClick={handleLoadMoreClick}>Load more</button>
                    )}
                </div>
            )}

        </div>
    );
};

export default Cards;


//
// {(booksArr?.totalItems === 0 || visibleBooks?.length === 0) && ! showBooksImmediately ? (
//     <div className={s.error}>
//         <h2>No books found. Please try again.</h2>
//         <BiCommentError />
//     </div>
// ) : isLoading ? (
//     <div className={s.color_ring}>
//         <ColorRing
//             visible={true}
//             height="110"
//             width="110"
//             ariaLabel="blocks-loading"
//             wrapperStyle={{}}
//             wrapperClass="blocks-wrapper"
//             colors={['#fcefef', '#FFFFFFFF', '#c9c4c4', '#fcefef', '#FFFFFFFF']}
//         />
//     </div>
// ) : (
//     <div className={s.cards_block}>
//         <div>
//             {booksArr && booksArr?.totalItems !== undefined && booksArr && booksArr?.totalItems > 0 && (
//                 <span>Found {booksArr?.totalItems} results</span>
//             )}
//         </div>
//         <div className={s.card_block}>
//             {visibleBooks && visibleBooks.length > 0 && visibleBooks.map((book) => (
//                 <Card book={book} key={uuidv4()} />
//             ))}
//         </div>
//         {visibleBooks && visibleBooks.length < (booksArr?.totalItems || 0) && (
//             <button onClick={handleLoadMoreClick}>Load more</button>
//         )}
//     </div>
// )}


{/*{booksArr?.totalItems === 0 ? (*/
}
{/*    <div className={s.error}>*/
}
{/*        <h2>No books found. Please try again.</h2>*/
}
{/*        <BiCommentError/>*/
}
{/*    </div>*/
}
{/*) : isLoading ? (*/
}
{/*    <div className={s.color_ring}>*/
}
{/*        <ColorRing*/
}
{/*            visible={true}*/
}
{/*            height="110"*/
}
{/*            width="110"*/
}
{/*            ariaLabel="blocks-loading"*/
}
{/*            wrapperStyle={{}}*/
}
{/*            wrapperClass="blocks-wrapper"*/
}
{/*            colors={['#fcefef', '#FFFFFFFF', '#c9c4c4', '#fcefef', '#FFFFFFFF']}*/
}
{/*        />*/
}
{/*    </div>*/
}
{/*) : (*/
}
{/*    <div className={s.cards_block}>*/
}
{/*        <div>*/
}
{/*            {booksArr && booksArr?.totalItems !== undefined && booksArr && booksArr?.totalItems > 0 && (*/
}
{/*                <span>Found {booksArr?.totalItems} results</span>*/
}
{/*            )}*/
}
{/*        </div>*/
}
{/*        <div*/
}

{/*            className={s.card_block}>*/
}
{/*            {visibleBooks && visibleBooks.length > 0 && visibleBooks.map((book) => (*/
}
{/*                <Card book={book} key={uuidv4()}/>*/
}
{/*            ))}*/
}
{/*        </div>*/
}

{/*        {visibleBooks && visibleBooks.length < (booksArr?.totalItems || 0) && (*/
}
{/*            <button onClick={handleLoadMoreClick}>Load more</button>*/
}
{/*        )}*/
}

{/*    </div>*/
}
{/*)}*/
}