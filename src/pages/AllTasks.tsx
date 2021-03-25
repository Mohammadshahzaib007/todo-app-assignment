import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import TodoCard from "../components/UI/TodoCard";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "calc(85vh - 15.625rem)",
  },
});

function AllTasks() {
  const classes = useStyles();

  return (
    <section className={classes.mainContainer}>
      <Container>
        <TodoCard />
      </Container>
    </section>
  );
}

export default AllTasks;
