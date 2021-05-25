import {bookAction, BookActionTypes, bookState} from "../../types/todo";

const initialState: bookState = {
    book: [],
    author: 'author',
    cover: 'way',
    date: 0,
    publisher: 'publisher',
    ISBN: 1
}

export const bookReducer = (state = initialState, action: bookAction) : bookState => {
    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS:
            return {book: action.payload, author: action.payload, cover: action.payload, date: null, publisher: null, ISBN: null};
        case BookActionTypes.CLICK_BOOKS:
            return {book: [], author: action.payload, cover: action.payload, date: action.payload, publisher: action.payload, ISBN: action.payload};
        default:
            return state;
    }
}