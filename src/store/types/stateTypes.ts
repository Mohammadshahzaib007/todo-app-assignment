export interface TodosState {
    todos: Array<TodoState>
}

// a single todo
export interface TodoState {
    id: string,
    priority: string,
    title: string,
    description: string,
    eta: string,
}