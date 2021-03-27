import { ADD_TODO, CLOSE_SNACKBAR, MARK_AS_COMPLETED, OPEN_ADD_TODO_MODAL, OPEN_SNACKBAR, REMOVE_TODO, CLOSE_ADD_TODO_MODAL, EDIT_TODO, SET_TODO_DATA, CLEAR_TODO_DATA } from "../actions/actionTypes";
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

export interface EditTodo {
    type: typeof EDIT_TODO,
    id: string
}

export type TodoActionTypes = AddTodo | RemoveTodo | MarkAsCompleted | EditTodo;

//-----------------------------------------snackbar action types------------------------------------//
export interface OpenSnackbar {
    type: typeof OPEN_SNACKBAR,
    payload: SnackbarState
}

export interface CloseSnackbar {
    type: typeof CLOSE_SNACKBAR
}

export type SnackbarActionTypes = OpenSnackbar | CloseSnackbar;

//-----------------------------------------add todo modal action types------------------------------------//
export interface OpenAddTodoModal {
    type: typeof OPEN_ADD_TODO_MODAL,
}

export interface CloseAddTodoModal {
    type: typeof CLOSE_ADD_TODO_MODAL
}

export interface SetTodoData {
    type: typeof SET_TODO_DATA,
    payload: TodoState,
}

export interface ClearTodoData {
    type: typeof CLEAR_TODO_DATA,
}

export type AddTodoModalTypes = OpenAddTodoModal | CloseAddTodoModal | SetTodoData | ClearTodoData;

//-----------------------------------------app action types------------------------------------//
export type AppActionTypes = TodoActionTypes | SnackbarActionTypes | AddTodoModalTypes