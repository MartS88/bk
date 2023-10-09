

export interface GetBookParams {
    startIndex: number;
    search?: string | undefined;
    categoryOption?: string | undefined;
    sortOption?: string | undefined;
}



//
// if (searchParams && searchParams.startIndex !== undefined) {
//
//     const newSearchParams: GetBookParams = {
//         ...searchParams,
//         startIndex: startIndex,
//     };
//
//     console.log('new', searchParams)}
//
// const handleLoadMoreClick = () => {
//     if (booksArr && booksArr?.totalItems !== undefined && startIndex < booksArr?.totalItems){
//         setStartIndex(startIndex+30)
//         console.log('click', startIndex)
//
//     }
//     if (searchParams && searchParams.startIndex !== undefined) {
//
//         const newSearchParams: GetBookParams = {
//             ...searchParams,
//             startIndex: startIndex,
//         };
//
//         console.log('new', newSearchParams)
//
// dispatch(setIsLoading(true));
// dispatch(setIsError(false));
//     };


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
// export default Cards