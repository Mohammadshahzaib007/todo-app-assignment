
import { ADD_TODO, COMPLETED_EDITING_TODO, EDIT_TODO, MARK_AS_COMPLETED, REMOVE_TODO, REMOVE_TODO_THAT_IS_BEING_UPDATED } from "../actions/actionTypes";
import { AppActionTypes, } from "../types/action";
import { TodosState as State, TodoState } from "../types/stateTypes";

const initialTodoState: State = {
    todos: [],
    todoThatHaveToEdit: {} as TodoState
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
                return el.id === action.id ? { ...el, isCompleted: !el.isCompleted } : el
            })
            return {
                ...state,
                todos: updatedTodosWithCompletedTodos,
            }

        case EDIT_TODO:
            let updatedTodoThatHaveToEdit = {} as TodoState;
            state.todos.forEach((item) => {
                if (item.id === action.id) {
                    return updatedTodoThatHaveToEdit = { ...item, isBeingEdited: false }
                }
            })
            return {
                ...state,
                todoThatHaveToEdit: updatedTodoThatHaveToEdit
            }

        case COMPLETED_EDITING_TODO:
            let completedEditingTodo = {} as TodoState
            return {
                ...state,
                todoThatHaveToEdit: completedEditingTodo
            }

        case REMOVE_TODO_THAT_IS_BEING_UPDATED:
            // removing todo that has isBeingEdited  from the todos
            const unEditedTodos = state.todos.filter(item => item.id !== action.id)
            return {
                ...state,
                todos: unEditedTodos,
            }
        default:
            return state
    }
}


export default todoReducer;