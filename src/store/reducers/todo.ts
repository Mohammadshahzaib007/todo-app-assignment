
import { ADD_TODO, EDIT_TODO, MARK_AS_COMPLETED, REMOVE_TODO } from "../actions/actionTypes";
import { AppActionTypes, } from "../types/action";
import { TodosState as State, TodoState } from "../types/stateTypes";

const initialTodoState: State = {
    todos: [],
    todoThatHaveToEdit: {}
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
        case EDIT_TODO:

            let updatedTodoThatHaveToEdit: TodoState | {} = {};

            state.todos.forEach((item) => {
                if (item.id === action.id) {
                    return updatedTodoThatHaveToEdit = { ...item }
                }
            })

            return {
                ...state,
                todoThatHaveToEdit: updatedTodoThatHaveToEdit
            }
        default:
            return state
    }
}


export default todoReducer;