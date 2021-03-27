// array of todos
export interface TodosState {
    todos: Array<TodoState>,
    todoThatHaveToEdit: TodoState
}

// a single todo
export interface TodoState {
    id: string,
    priority: string,
    title: string,
    description: string,
    eta: string,
    isCompleted: boolean,
    isBeingEdited: boolean
}

// for snackbar
export interface SnackbarState {
    open: boolean,
    color?: 'error' | 'warning' | 'info' | 'success',
    content: string,
}

// for addTodoModal
export interface AddTodoModalReducer {
    open: boolean
}
