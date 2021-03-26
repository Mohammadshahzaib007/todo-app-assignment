import { AppActionTypes } from "../types/action"
import { SnackbarState } from "../types/stateTypes";

const snackbarInitialState:SnackbarState = {
    color: undefined,
    open: false
}

const snackbarReducer = (state = snackbarInitialState, action: AppActionTypes): SnackbarState => {
    return state
}

export default snackbarReducer;