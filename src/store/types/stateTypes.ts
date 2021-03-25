export interface TodosState {
    todos: Array<TodoState>
}

// a single todo
export interface TodoState {
    title: string,
    description: string,
    eta: string
}