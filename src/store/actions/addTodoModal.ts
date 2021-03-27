import { AppActionTypes } from "../types/action"
import { TodoState } from "../types/stateTypes"
import { CLEAR_TODO_DATA, CLOSE_ADD_TODO_MODAL, OPEN_ADD_TODO_MODAL, SET_TODO_DATA } from "./actionTypes"

export const openAddTodoModal = (): AppActionTypes => {
    return {
        type: OPEN_ADD_TODO_MODAL,
    }
}
export const closeAddTodoModal = (): AppActionTypes => {
    return {
        type: CLOSE_ADD_TODO_MODAL
    }
}

export const setTodoData = (payload: TodoState): AppActionTypes => {
    return {
        type: SET_TODO_DATA,
        payload: payload
    }
}

export const clearTodoData = (): AppActionTypes => {
    return {
        type: CLEAR_TODO_DATA
    }
}