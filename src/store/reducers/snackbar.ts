import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "../actions/actionTypes";
import { AppActionTypes } from "../types/action"
import { SnackbarState } from "../types/stateTypes";

const snackbarInitialState: SnackbarState = {
    color: undefined,
    open: false,
    content: ''
}

const snackbarReducer = (state = snackbarInitialState, action: AppActionTypes): SnackbarState => {
    switch (action.type) {
        case OPEN_SNACKBAR:
            return {
                color: action.payload.color,
                open: action.payload.open,
                content: action.payload.content
            }

        case CLOSE_SNACKBAR:
            return {
                ...state,
                open: false,
                content: ''
            }

        default:
            return state
    }
}

export default snackbarReducer;