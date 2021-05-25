export interface bookState {
    book: [];
    author: string | [];
    cover: string | [];
    date: number | null;
    publisher: string | null;
    ISBN: number | null;
}

export interface bookAction {
    type: string | FetchBookAction | ClickBookAction;
    payload?: any;
}

export enum BookActionTypes {
    FETCH_BOOKS = 'FETCH_BOOKS',
    CLICK_BOOKS = 'CLICK_BOOKS'
}

interface FetchBookAction {
    type: BookActionTypes.FETCH_BOOKS,
    payload: any[]
}

interface ClickBookAction {
    type: BookActionTypes.CLICK_BOOKS,
    payload: string | number
}
