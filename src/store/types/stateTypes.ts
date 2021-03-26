// array of todos
export interface TodosState {
    todos: Array<TodoState>,

}

// a single todo
export interface TodoState {
    id: string,
    priority: string,
    title: string,
    description: string,
    eta: string,
    isCompleted: boolean
}

export interface SnackbarState {
    open: boolean,
    color?: 'error' | 'warning' | 'info' | 'success',
    content: string,
}