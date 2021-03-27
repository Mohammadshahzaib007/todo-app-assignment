import React, { Dispatch, useEffect, useReducer } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppActionTypes } from "../store/types/action";
import { v4 as uuidv4 } from "uuid";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { AppState } from "../store";
import { openSnackbar } from "../store/actions/snackbar";
import {
  addTodo,
  completedEditingTodo,
  removeTodoThatIsBeingUpdated,
} from "../store/actions/todo";
import moment from "moment";

//-----------------------------------------Material UI------------------------------------//
const useStyles = makeStyles({
  input: {
    marginBottom: "20px",
  },
});

//-----------------------------------------props types------------------------------------//
type Props = {
  handleClose: () => void;
};

//-----------------------------------------state types for local------------------------------------//
interface State {
  title: string;
  description: string;
  eta: string;
  priority: string;
}

//-----------------------------------------action types for local------------------------------------//
interface AddTodoAction {
  type: string;
  payload: string;
}

//-----------------------------------------state------------------------------------//
const initialState: State = {
  title: "",
  description: "",
  eta: "",
  priority: "",
};

//-----------------------------------------reducer function------------------------------------//
const reducer = (state: State, action: AddTodoAction): State => {
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
    case "SET_PRIORITY":
      return {
        ...state,
        priority: action.payload,
      };

    case "CLEAR_FIELDS":
      return {
        title: action.payload,
        description: action.payload,
        eta: action.payload,
        priority: action.payload,
      };
    default:
      return state;
  }
};

//-----------------------------------------component------------------------------------//
export default function AddTodoModal(props: Props) {
  //-----------------------------------------props destructuring------------------------------------//
  const { handleClose } = props;

  //-----------------------------------------classes for style------------------------------------//
  const classes = useStyles();

  //-----------------------------------------local state and its dispatch------------------------------------//
  const [state, localDispatch] = useReducer(reducer, initialState);

  //-----------------------------------------Redux Dispatch with useDispatch hook------------------------------//
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  //-----------------------------------------Redux state with useSlector hook------------------------------//
  //-----------------------------------------modal open state------------------------------//
  const open = useSelector((state: AppState) => state.addTodoModal.open);

  //-----------------------------------------todo that have to be edited ------------------------------//
  const todoHaveToEdit = useSelector(
    (state: AppState) => state.todo.todoThatHaveToEdit
  );

  const editTodoHandler = () => {
    if (
      Object.keys(todoHaveToEdit).length !== 0 ||
      todoHaveToEdit.isBeingEdited
    ) {
      localDispatch({ type: "SET_TITLE", payload: todoHaveToEdit.title });
      localDispatch({
        type: "SET_DESCRIPTION",
        payload: todoHaveToEdit.description,
      });
      localDispatch({ type: "SET_ETA", payload: todoHaveToEdit.eta });
      localDispatch({ type: "SET_PRIORITY", payload: todoHaveToEdit.priority });
      return;
    }
  };

  // for updating text fields values
  useEffect(() => {
    editTodoHandler();
  }, [todoHaveToEdit]);

  const modalCloseHandler = () => {
    handleClose();
    localDispatch({ type: "CLEAR_FIELDS", payload: "" });
    dispatch(completedEditingTodo());
  };

  const addTodoHandler = () => {
    if (
      state.title === "" ||
      state.description === "" ||
      state.eta === "" ||
      state.priority === ""
    ) {
      dispatch(
        openSnackbar({
          color: "error",
          open: true,
          content: "Please Entere Valid Data or don't left any field empty",
        })
      );
      return false;
    }

    if (Object.keys(todoHaveToEdit).length !== 0) {
      dispatch(removeTodoThatIsBeingUpdated(todoHaveToEdit.id));

      dispatch(
        addTodo({
          id: todoHaveToEdit.id,
          title: state.title,
          description: state.description,
          eta: moment(state.eta).format("MMM Do YY"),
          priority: state.priority,
          isCompleted: todoHaveToEdit.isCompleted,
          isBeingEdited: false,
          createdAt: todoHaveToEdit.createdAt,
        })
      );
      dispatch(completedEditingTodo());
    } else {
      dispatch(
        addTodo({
          id: uuidv4(),
          title: state.title,
          description: state.description,
          eta: moment(state.eta).format("MMM Do YY"),
          priority: state.priority,
          isCompleted: todoHaveToEdit.isCompleted,
          isBeingEdited: false,
          createdAt: moment().format("MMM Do YY"),
        })
      );
    }

    // for success msg
    const msg = todoHaveToEdit.isBeingEdited
      ? "Todo was updated successful"
      : "Todo was added successful";
    dispatch(
      openSnackbar({
        color: "success",
        open: true,
        content: msg,
      })
    );
    localDispatch({ type: "CLEAR_FIELDS", payload: "" });
    modalCloseHandler();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={modalCloseHandler}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Tasks</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Checking items off a to-do list doesn’t determine progress; focusing
            on your priorities is what counts.
          </DialogContentText>
          <TextField
            autoFocus
            className={classes.input}
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
            className={classes.input}
            margin="dense"
            label="Description"
            multiline
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
            className={classes.input}
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              className={classes.input}
              fullWidth
              labelId="demo-simple-select-label"
              value={state.priority}
              onChange={(e) =>
                // @ts-ignore
                localDispatch({ type: "SET_PRIORITY", payload: e.target.value })
              }
            >
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={modalCloseHandler} color="secondary">
            Cancel
          </Button>
          <Button onClick={addTodoHandler} color="secondary">
            {Object.keys(todoHaveToEdit).length !== 0 ? "update todo" : "add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
