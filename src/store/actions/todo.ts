import { AppActionTypes } from "../types/action"
import { ADD_TODO } from "./actionTypes"

export const addTodo = (): AppActionTypes => {
    return {
        type: ADD_TODO
    }
}