export interface TodosState {
    todos: Array<TodoState>
}

// a single todo
export interface TodoState {
    id: string,
    title: string,
    description: string,
    eta: string,

}