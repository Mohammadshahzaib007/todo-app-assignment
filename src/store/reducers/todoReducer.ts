import { AppActionTypes } from "../types/action";
import { TodosState as State } from "../types/stateTypes";

const initialTodoState: State = {
    todos: []
}

function todoReducer(state = initialTodoState, action: AppActionTypes) {

    return state
}


export default todoReducer;