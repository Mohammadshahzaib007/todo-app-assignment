import { CLOSE_ADD_TODO_MODAL, OPEN_ADD_TODO_MODAL } from "../actions/actionTypes";
import { AppActionTypes } from "../types/action"
import { AddTodoModalReducer } from "../types/stateTypes";

const initialAddTodoModalState = {
    open: false,
}

const addTodoModalReducer = (state = initialAddTodoModalState, action: AppActionTypes): AddTodoModalReducer => {
    switch (action.type) {
        case OPEN_ADD_TODO_MODAL:
            return {
                open: true
            }
        case CLOSE_ADD_TODO_MODAL:
            return {
                open: false
            }
        default:
            return state
    }
}

export default addTodoModalReducer;