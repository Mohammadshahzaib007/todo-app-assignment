import { ADD_TODO, REMOVE_TODO } from "../actions/actionTypes";
import { AppActionTypes } from "../types/action";
import { TodosState as State } from "../types/stateTypes";

const initialTodoState: State = {
    todos: []
}

function todoReducer(state = initialTodoState, action: AppActionTypes) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return state
        default:
            return state
    }
}


export default todoReducer;