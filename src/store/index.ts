import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import thunk, { ThunkMiddleware } from 'redux-thunk';
import todoReducer from './reducers/todo'
import snackbarReducer from './reducers/snackbar'
import { AppActionTypes } from "./types/action";
import addTodoModalReducer from "./reducers/addTodoModal";



/*
THIS SOLUTION HAS BEEN TAKEN FORM THE STACKOVERFLOW
@see = https://stackoverflow.com/questions/52800877/error-with-redux-devtools-extension-using-ts-property-redux-devtools-extens
*/
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// FOR REDUX DEV TOOL WITH ADVANCED CONFIGRATIONS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    todo: todoReducer,
    snackbar: snackbarReducer,
    addTodoModal: addTodoModalReducer
})

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActionTypes>)))

export default store;