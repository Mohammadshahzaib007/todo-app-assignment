import { ADD_TODO, CLOSE_SNACKBAR, OPEN_SNACKBAR, REMOVE_TODO } from "../actions/actionTypes";
import { SnackbarState, TodoState } from "./stateTypes";

export interface AddTodo {
    type: typeof ADD_TODO,
    payload: TodoState
}

export interface RemoveTodo {
    type: typeof REMOVE_TODO,
    id: string,
}

export interface OpenSnackbar {
    type: typeof OPEN_SNACKBAR,
    payload: SnackbarState
}

export interface CloseSnackbar {
    type: typeof CLOSE_SNACKBAR
}

export type TodoActionTypes = AddTodo | RemoveTodo;

export type SnackbarActionTypes = OpenSnackbar | CloseSnackbar;

export type AppActionTypes = TodoActionTypes | SnackbarActionTypes