import {bookItem} from "./bookItem";


export interface BookSearchResult {
    kind: string;
    totalItems: number,
    items: bookItem[];
}
