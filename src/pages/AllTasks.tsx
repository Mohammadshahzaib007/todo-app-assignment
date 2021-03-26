import React, { useState } from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import TodoCard from "../components/UI/TodoCard";
import { AppState } from "../store";
import { TodoState } from "../store/types/stateTypes";
import Nodata from "../components/UI/Nodata";
import {
  MARK_AS_COMPLETED,
  OPEN_SNACKBAR,
  REMOVE_TODO,
} from "../store/actions/actionTypes";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AppActionTypes } from "../store/types/action";

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

  //-----------------------------------------Redux Dispatch with useDispatch hook------------------------------//
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  // for opening delelet modal
  const openCloseDeleteModalHandler = () => {
    setIsDeleteModalOpen((prevState) => !prevState);
    // if user confirm the delete msg then REMOVE_TODO action will dispatch from the delete modal
  };

  // it will be used in the delete modal component
  // for now it won't be used in delete component (it is being used in the card-todo component)
  const DeleteConfirmationHandler = (id: string) => {
    dispatch({ type: REMOVE_TODO, id: id });

    dispatch({
      type: OPEN_SNACKBAR,
      payload: {
        color: "success",
        open: true,
        content: "Todo deleted successfully",
      },
    });
  };

  // for marking todo as completed
  const markAsCompleted = (id: string) => {
    dispatch({ type: MARK_AS_COMPLETED, id: id });
  };

  //-----------------------------------------Redux state with useSlector hook------------------------------//
  //-----------------------------------------All Todos------------------------------//
  const todos = useSelector((state: AppState) => state.todo.todos);

  const todoLists = () => {
    return todos.map((todo: TodoState) => (
      <TodoCard
        priority={todo.priority}
        openCloseDeleteModal={openCloseDeleteModalHandler}
        todoId={todo.id}
        key={todo.id}
        todoTitle={todo.title}
        todoDescription={todo.description}
        eta={todo.eta}
        isDeleteModalOpen={isDeleteModalOpen}
        DeleteConfirmationHandler={DeleteConfirmationHandler}
        markAsCompleted={(id) => markAsCompleted(id)}
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
