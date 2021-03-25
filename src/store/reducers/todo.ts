
import { ADD_TODO, REMOVE_TODO } from "../actions/actionTypes";
import { AppActionTypes } from "../types/action";
import { TodosState as State } from "../types/stateTypes";

const initialTodoState: State = {
    todos: []
}


const todoReducer = (state = initialTodoState, action: AppActionTypes): State => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            const updatedTodos = state.todos.filter(item => item.id !== action.id)
            return {
                todos: updatedTodos
            }
        default:
            return state
    }
}


export default todoReducer;