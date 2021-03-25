import { ADD_TODO, REMOVE_TODO } from "../actions/actionTypes";

export interface AddTodo {
    type: typeof ADD_TODO
}

export interface RemoveTodo {
    type: typeof REMOVE_TODO
}

export type TodoActionTypes = AddTodo | RemoveTodo;

export type AppActionTypes = TodoActionTypes