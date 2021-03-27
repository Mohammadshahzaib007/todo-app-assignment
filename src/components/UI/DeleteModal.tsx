import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";


type Props = {
  isDeleteModalOpen: boolean;
  openCloseDeleteModal: () => void;
  deleteTodo: (id:string) => void;
  id: string;
};

export default function DeleteModal(props: Props) {
  const { isDeleteModalOpen, openCloseDeleteModal, deleteTodo, id } = props;

 
  const handleClose = () => {
    openCloseDeleteModal();
    
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
            onClick={() => {
              handleClose();
              deleteTodo(id);
            }}
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
