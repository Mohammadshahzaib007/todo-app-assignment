import { AppActionTypes } from "../types/action"
import { TodoState } from "../types/stateTypes"
import { ADD_TODO, EDIT_TODO, MARK_AS_COMPLETED, REMOVE_TODO } from "./actionTypes"

export const addTodo = (payload: TodoState): AppActionTypes => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}

export const removeTodo = (id: string): AppActionTypes => {
    return {
        type: REMOVE_TODO,
        id: id
    }
}

export const markAsCompleted = (id: string): AppActionTypes => {
    return {
        type: MARK_AS_COMPLETED,
        id: id
    }
}

export const editTodo = (id:string):AppActionTypes => {
    return {
        type: EDIT_TODO,
        id: id
    }
}