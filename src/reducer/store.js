import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import thunkMiddleware  from "redux-thunk";
import { rootReducer } from ".";

const enhancers =[
    applyMiddleware(
        thunkMiddleware,
        logger
    )
]

const enhancer = compose(...enhancers)
export const store = createStore(rootReducer,{},enhancer)


