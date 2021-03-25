import { AppActionTypes } from "../types/action"
import { TodoState } from "../types/stateTypes"
import { ADD_TODO } from "./actionTypes"

export const addTodo = (payload: TodoState): AppActionTypes => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}