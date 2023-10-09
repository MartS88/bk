import React from 'react';
import s from './Cards.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../store/store';
import { v4 as uuidv4 } from 'uuid';
import Card from './card/Card';
import { BookSearchResult } from '../../types/bookSearch_types';
import { ColorRing } from 'react-loader-spinner';
import { BiCommentError } from 'react-icons/bi';
import { setStartIndex} from "../../store/slice/bookSlice";



const Cards = () => {
    const dispatch = useDispatch();
    const booksArr: BookSearchResult | null = useSelector(
        (state: RootState) => state.book.booksData
    );
    const booksItems = booksArr?.items;
    const isLoading = useSelector((state: RootState) => state.book.isLoading);
    const startIndex = useSelector((state: RootState) => state.book.startIndex);



    const handleLoadMoreClick = () => {
        if (booksArr && startIndex < booksArr?.totalItems) {
            dispatch(setStartIndex(startIndex + 30));
        }
    };

    const visibleBooks = booksItems?.slice(0, 30);

    return (
        <div className={s.cards}>
            {booksArr?.totalItems === 0 ? (
                <div className={s.error}>
                    <h2>No books found. Please try again.</h2>
                    <BiCommentError />
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
                        {booksArr && booksArr?.totalItems > 0 && (
                            <span>Found {booksArr?.totalItems} results</span>
                        )}
                    </div>
                    <div className={s.card_block}>
                        {visibleBooks && visibleBooks.length > 0 && visibleBooks.map((book) => (
                            <Card book={book} key={uuidv4()} />
                        ))}
                    </div>

                    {visibleBooks && visibleBooks.length < (booksArr?.totalItems || 0) && (
                        <button onClick={handleLoadMoreClick}>Load more</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cards;




// const searchParams = useSelector((state: RootState) => state.book.searchParams);
//
//
// const handleLoadMoreClick = () => {
//     if (searchParams && searchParams.startIndex !== undefined) {
//         const newSearchParams = {
//             ...searchParams,
//             startIndex: (searchParams.startIndex || 0) + 30,
//         };
//
//         if (!isError) {
//             dispatch(addBookArr(newSearchParams));
//         }
//     }
// };
//
// };


// const Cards = () => {
//     const booksArr: BookSearchResult | null = useSelector(
//         (state: RootState) => state.book.booksData
//     );
//
//     const booksItems = booksArr?.items;
//     const isLoading = useSelector((state: RootState) => state.book.isLoading);
//
//     const [currentPage, setCurrentPage] = useState(1);
//     const [loadedItems, setLoadedItems] = useState(30);
//
//
//     const handleLoadMoreClick = () => {
//         setCurrentPage(currentPage + 30);
//         setLoadedItems(loadedItems + 30);
//     };
//
//     const visibleBooks = booksItems?.slice(0, loadedItems);
//
//
//     return (
//         <div className={s.cards}>
//             {booksArr?.totalItems === 0 ? (
//                 <div className={s.error}>
//                     <h2>No books found. Please try again.</h2>
//                     <BiCommentError/>
//                 </div>
//             ) : isLoading ? (
//                 <div className={s.color_ring}>
//                     <ColorRing
//                         visible={true}
//                         height="110"
//                         width="110"
//                         ariaLabel="blocks-loading"
//                         wrapperStyle={{}}
//                         wrapperClass="blocks-wrapper"
//                         colors={['#fcefef', '#FFFFFFFF', '#c9c4c4', '#fcefef', '#FFFFFFFF']}
//                     />
//                 </div>
//             ) : (
//                 <div className={s.cards_block}>
//                     <div>
//                         {booksArr && booksArr?.totalItems > 0 && (
//                             <span>Found {booksArr?.totalItems} results</span>
//                         )}
//                     </div>
//                     <div
//
//                         className={s.card_block}>
//                         {visibleBooks && visibleBooks.length > 0 && visibleBooks.map((book) => (
//                             <Card book={book} key={uuidv4()}/>
//                         ))}
//                     </div>
//
//                     {visibleBooks && visibleBooks.length < (booksArr?.totalItems || 0) && (
//                         <button onClick={handleLoadMoreClick}>Load more</button>
//                     )}
//
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default Cards;