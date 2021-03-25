import { ADD_TODO, REMOVE_TODO } from "../actions/actionTypes";
import { TodoState } from "./stateTypes";

export interface AddTodo {
    type: typeof ADD_TODO,
    payload: TodoState
}

export interface RemoveTodo {
    type: typeof REMOVE_TODO
}

export type TodoActionTypes = AddTodo | RemoveTodo;

export type AppActionTypes = TodoActionTypes