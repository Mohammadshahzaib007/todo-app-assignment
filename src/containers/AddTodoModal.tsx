import React, { Dispatch, useReducer } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../store/actions/actionTypes";
import { AppActionTypes } from "../store/types/action";
import { v4 as uuidv4 } from "uuid";

//-----------------------------------------props types------------------------------------//
type Props = {
  handleClose: () => void;
  open: boolean;
};

//-----------------------------------------state types------------------------------------//
interface State {
  title: string;
  description: string;
  eta: string;
}

//-----------------------------------------action types------------------------------------//
interface AddTodoAction {
  type: string;
  payload: string;
}

//-----------------------------------------state------------------------------------//
const initialState: State = {
  title: "",
  description: "",
  eta: "",
};

//-----------------------------------------reducer function------------------------------------//
function reducer(state: State, action: AddTodoAction) {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };

    case "SET_ETA":
      return {
        ...state,
        eta: action.payload,
      };

    case "CLEAR_FIELDS":
      return state;
    default:
      return state;
  }
}

//-----------------------------------------component------------------------------------//
export default function AddTodoModal(props: Props) {
  //-----------------------------------------props destructuring------------------------------------//
  const { handleClose, open } = props;

  //-----------------------------------------local state and its dispatch------------------------------------//
  const [state, localDispatch] = useReducer(reducer, initialState);

  //-----------------------------------------Redux Dispatch with useDispatch hook------------------------------//
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  const addTodoHandler = () => {
    if (state.title === "" || state.description === "" || state.eta === "")
      return false;

    handleClose();

    dispatch({
      type: ADD_TODO,
      payload: {
        id: uuidv4(),
        title: state.title,
        description: state.description,
        eta: state.eta,
      },
    });
    // localDispatch({ type: "CLEAR_FIELDS" });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            color="secondary"
            value={state.title}
            onChange={(e) =>
              localDispatch({ type: "SET_TITLE", payload: e.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="textarea"
            fullWidth
            color="secondary"
            value={state.description}
            onChange={(e) =>
              localDispatch({
                type: "SET_DESCRIPTION",
                payload: e.target.value,
              })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            label="ETA"
            type="date"
            fullWidth
            color="secondary"
            value={state.eta}
            onChange={(e) =>
              localDispatch({ type: "SET_ETA", payload: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={addTodoHandler} color="secondary">
            add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
