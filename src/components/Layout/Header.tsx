import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { NavLink } from "react-router-dom";
import AddTodoModal from "../../containers/AddTodoModal";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AppActionTypes } from "../../store/types/action";
import { CLOSE_ADD_TODO_MODAL, OPEN_ADD_TODO_MODAL } from "../../store/actions/actionTypes";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "15.625rem",
    background: "#f9eef6",
  },
  button: {
    marginTop: "10px",
    borderRadius: "20px",
  },
  linkContainer: {
    padding: "20px 0",
  },
});

function Header() {
  const classes = useStyles();

  const dispatch = useDispatch<Dispatch<AppActionTypes>>()
 

  const handleClickOpen = () => {
    // setOpen(true);
    dispatch({type: OPEN_ADD_TODO_MODAL})
  };

  const handleClose = () => {
    // setOpen(false);
    dispatch({type: CLOSE_ADD_TODO_MODAL})
  };

  // this data for looping
  const NavLinks: Array<{ name: string; link: string }> = [
    { name: "all tasks", link: "/" },
    { name: "pending tasks", link: "/pending-tasks" },
    { name: "completed", link: "/completed-tasks" },
  ];

  return (
    <>
      <section className={classes.header}>
        <Container className="fullWidthAndHeight">
          <Grid
            container
            className="fullWidthAndHeight"
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Typography
              variant="h4"
              style={{ textTransform: "uppercase", fontSize: "1.4rem" }}
            >
              start adding Tasks
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={handleClickOpen}
            >
              Add
            </Button>
          </Grid>
        </Container>
      </section>
      <section className={classes.linkContainer}>
        <Container>
          <Grid container>
            {NavLinks.map((item, i) => (
              <Grid item container justify="center" xs={12} md={4} key={i}>
                <NavLink
                  exact
                  to={item.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button size="large" color="secondary">
                    {item.name}
                  </Button>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Container>
        <AddTodoModal handleClose={handleClose}  />
      </section>
    </>
  );
}

export default Header;
