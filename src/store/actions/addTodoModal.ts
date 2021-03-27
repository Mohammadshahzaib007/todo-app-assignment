import { AppActionTypes } from "../types/action"
import { CLOSE_ADD_TODO_MODAL, OPEN_ADD_TODO_MODAL } from "./actionTypes"

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