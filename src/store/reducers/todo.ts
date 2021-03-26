
import { ADD_TODO, MARK_AS_COMPLETED, REMOVE_TODO } from "../actions/actionTypes";
import { AppActionTypes } from "../types/action";
import { TodosState as State } from "../types/stateTypes";

const initialTodoState: State = {
    todos: [],
}


const todoReducer = (state = initialTodoState, action: AppActionTypes): State => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        case REMOVE_TODO:
            const updatedTodos = state.todos.filter(item => item.id !== action.id)
            return {
                ...state,
                todos: updatedTodos
            }
        case MARK_AS_COMPLETED:
            const updatedTodosWithCompletedTodos = state.todos.map(el => {
                return el.id === action.id ? { ...el, isCompleted: true } : el
            })

            return {
                ...state,
                todos: updatedTodosWithCompletedTodos,
            }
        default:
            return state
    }
}


export default todoReducer;