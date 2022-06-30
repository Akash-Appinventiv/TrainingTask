import { combineReducers } from "redux";
import { bookmarkReducer, homeScreenReducer } from "../modules/airplaneBooking";

export const rootReducer=
    combineReducers({
        bookmarkReducer,
        homeScreenReducer
    })
