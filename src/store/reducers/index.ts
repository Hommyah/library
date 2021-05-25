import {combineReducers} from "redux";
import {bookReducer} from "./bookRedecer";


export const rootReducer = combineReducers({
    book: bookReducer
})