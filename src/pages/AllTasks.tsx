import React, { useState } from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import TodoCard from "../components/UI/TodoCard";
import { AppState } from "../store";
import { TodoState } from "../store/types/stateTypes";
import Nodata from "../components/UI/Nodata";
// react flip move is for animation
// import FlipMove from 'react-flip-move';

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "calc(85vh - 15.625rem)",
    overflow: "auto",
  },
});

function AllTasks() {
  const classes = useStyles();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // for opening delelet modal
  const openCloseDeleteModalHandler = () => {
    setIsDeleteModalOpen((prevState) => !prevState);
    // if user confirm the delete msg then REMOVE_TODO action will dispatch from the delete modal
  };

  //-----------------------------------------Redux state with useSlector hook------------------------------//
  //-----------------------------------------All Todos------------------------------//
  const todos = useSelector((state: AppState) => state.todo.todos);

  const todoLists = () => {
    return todos.map((todo: TodoState) => (
      <TodoCard
        priority={todo.priority}
        openCloseDeleteModal={openCloseDeleteModalHandler}
        id={todo.id}
        key={todo.id}
        todoTitle={todo.title}
        todoDescription={todo.description}
        eta={todo.eta}
        isDeleteModalOpen={isDeleteModalOpen}
      />
    ));
  };

  return (
    <section className={classes.mainContainer}>
      {todos.length === 0 ? (
        <Nodata title="There aren't any tasks for today..😊 " />
      ) : (
        <Container>
          <Grid container wrap="wrap">
            {todoLists()}
          </Grid>
        </Container>
      )}
    </section>
  );
}

export default AllTasks;
