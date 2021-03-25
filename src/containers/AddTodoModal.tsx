import React, { useReducer } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


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
    default:
      return state;
  }
}

//-----------------------------------------component------------------------------------//
export default function AddTodoModal(props: Props) {
  const { handleClose, open } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

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
              dispatch({ type: "SET_TITLE", payload: e.target.value })
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
              dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
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
              dispatch({ type: "SET_ETA", payload: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
