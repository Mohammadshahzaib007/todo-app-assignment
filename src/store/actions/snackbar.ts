import { AppActionTypes } from "../types/action"
import { SnackbarState } from "../types/stateTypes"
import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "./actionTypes"

export const openSnackbar = (payload: SnackbarState):AppActionTypes => {
    return {
        type: OPEN_SNACKBAR,
        payload: payload
    }
}
export const closeSnackbar = ():AppActionTypes => {
    return {
        type: CLOSE_SNACKBAR
    }
}