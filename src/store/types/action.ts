import { ADD_TODO, CLOSE_SNACKBAR, MARK_AS_COMPLETED, OPEN_SNACKBAR, REMOVE_TODO } from "../actions/actionTypes";
import { SnackbarState, TodoState } from "./stateTypes";

//-----------------------------------------todo action types------------------------------------//
export interface AddTodo {
    type: typeof ADD_TODO,
    payload: TodoState
}

export interface RemoveTodo {
    type: typeof REMOVE_TODO,
    id: string,
}

export interface MarkAsCompleted {
    type: typeof MARK_AS_COMPLETED,
    id: string,
}

export type TodoActionTypes = AddTodo | RemoveTodo | MarkAsCompleted;

//-----------------------------------------snackbar action types------------------------------------//
export interface OpenSnackbar {
    type: typeof OPEN_SNACKBAR,
    payload: SnackbarState
}

export interface CloseSnackbar {
    type: typeof CLOSE_SNACKBAR
}

export type SnackbarActionTypes = OpenSnackbar | CloseSnackbar;

//-----------------------------------------app action types------------------------------------//
export type AppActionTypes = TodoActionTypes | SnackbarActionTypes