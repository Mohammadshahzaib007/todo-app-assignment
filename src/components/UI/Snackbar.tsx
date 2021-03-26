import React from "react";
import Button from "@material-ui/core/Button";
import { Snackbar as SnackbarMui } from "@material-ui/core/";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { Dispatch } from "redux";
import { AppActionTypes } from "../../store/types/action";
import { CLOSE_SNACKBAR } from "../../store/actions/actionTypes";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Snackbar() {
  const classes = useStyles();
  //-----------------------------------------Redux state with useSlector hook------------------------------//
  //-----------------------------------------SNACKBAR DATA------------------------------//
  const { color, content, open } = useSelector(
    (state: AppState) => state.snackbar
  );

  //-----------------------------------------Redux Dispatch with useDispatch hook------------------------------//
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch({ type: CLOSE_SNACKBAR });
  };

  return (
    <div className={classes.root}>
      <SnackbarMui
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity={color}>
          {content}
        </Alert>
      </SnackbarMui>
    </div>
  );
}
