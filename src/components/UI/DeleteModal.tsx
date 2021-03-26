import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AppActionTypes } from "../../store/types/action";
import { OPEN_SNACKBAR, REMOVE_TODO } from "../../store/actions/actionTypes";

type Props = {
  isDeleteModalOpen: boolean;
  todoId: string;
  openCloseDeleteModal: () => void;
};

export default function DeleteModal(props: Props) {
  const { isDeleteModalOpen, openCloseDeleteModal, todoId } = props;

  //-----------------------------------------Redux Dispatch with useDispatch hook------------------------------//
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();
  const handleClose = () => {
    openCloseDeleteModal();
  };
  const DeleteConfirmationHandler = (id: string) => {
    dispatch({ type: REMOVE_TODO, id: id });
    handleClose();
    dispatch({
      type: OPEN_SNACKBAR,
      payload: {
        color: "success",
        open: true,
        content: "Todo deleted successfully",
      },
    });
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={isDeleteModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you realy want to delete this item?
            <br /> This Process can't be undo
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ marginRight: "10px" }}
            color="primary"
          >
            Cancle
          </Button>
          <Button
            variant="contained"
            onClick={() => DeleteConfirmationHandler(todoId)}
            disableElevation
            color="secondary"
            autoFocus
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
