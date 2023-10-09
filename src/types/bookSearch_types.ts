import {bookItem} from "./bookItem";


export interface BookSearchResult {
    length: number,
    kind: string;
    totalItems: number,
    startIndex?: number,
    items: bookItem[];

}
