import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import TodoCard from "../components/UI/TodoCard";
import { AppState } from "../store";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "calc(85vh - 15.625rem)",
  },
});

function AllTasks() {
  const classes = useStyles();

  //-----------------------------------------Redux state with useSlector hook------------------------------//
  //-----------------------------------------All Todos------------------------------//
  const todos = useSelector((state: AppState) => state.todo.todos);

  const todoLists = () => {
    return todos.map((todo) => (
      <TodoCard
        key={todo.id}
        todoTitle={todo.title}
        todoDescription={todo.description}
        eta={todo.eta}
      />
    ));
  };

  return (
    <section className={classes.mainContainer}>
      <Container>
        <Grid container wrap="wrap"> {todoLists()} </Grid>
      </Container>
    </section>
  );
}

export default AllTasks;
