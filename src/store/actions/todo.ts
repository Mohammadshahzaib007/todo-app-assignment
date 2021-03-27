import { AppActionTypes } from "../types/action"
import { TodoState } from "../types/stateTypes"
import { ADD_TODO, COMPLETED_EDITING_TODO, EDIT_TODO, MARK_AS_COMPLETED, REMOVE_TODO, REMOVE_TODO_THAT_IS_BEING_UPDATED } from "./actionTypes"

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

export const editTodo = (id: string): AppActionTypes => {
    return {
        type: EDIT_TODO,
        id: id
    }
}

export const completedEditingTodo = (): AppActionTypes => {
    return {
        type: COMPLETED_EDITING_TODO
    }
}

// FOR REMOVING TODO FROM TODOS THAT IS BEING EDITED
export const removeTodoThatIsBeingUpdated = (id: string): AppActionTypes => {
    return {
        type: REMOVE_TODO_THAT_IS_BEING_UPDATED,
        id: id
    }
}