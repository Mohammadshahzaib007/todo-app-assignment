import React, { useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Nodata from "../components/UI/Nodata";
import TodoCard from "../components/UI/TodoCard";
import { AppState } from "../store";
import { AppActionTypes } from "../store/types/action";
import { TodoState } from "../store/types/stateTypes";
import { editTodo, markAsCompleted, removeTodo } from "../store/actions/todo";
import { openSnackbar } from "../store/actions/snackbar";
import { openAddTodoModal } from "../store/actions/addTodoModal";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "calc(85vh - 15.625rem)",
    overflow: "auto",
  },
});

function CompletedTasks() {
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
  const deleteConfirmationHandler = (id: string) => {
    dispatch(removeTodo(id));

    dispatch(
      openSnackbar({
        color: "success",
        open: true,
        content: "Todo deleted successfully",
      })
    );
  };

  //-----------------------------------------Redux state with useSlector hook------------------------------//
  //-----------------------------------------All Todos------------------------------//
  const todos = useSelector((state: AppState) => state.todo.todos);

  // filter completed Todos
  const completedTodos = todos.filter((item) => item.isCompleted === true);

  //-----------------------------------------edit todo------------------------------//
  const editSelectedTodo = (id: string) => {
    dispatch(openAddTodoModal());
    dispatch(editTodo(id));
  };

 // for unmarking todo as completed
 const markAsCompletedTodo = (id: string) => {
  dispatch(markAsCompleted(id));
};


  const todoLists = () => {
    return completedTodos.map((todo: TodoState) => (
      <TodoCard
        onEditTodo={editSelectedTodo}
        priority={todo.priority}
        openCloseDeleteModal={openCloseDeleteModalHandler}
        todoId={todo.id}
        key={todo.id}
        todoTitle={todo.title}
        todoDescription={todo.description}
        eta={todo.eta}
        isDeleteModalOpen={isDeleteModalOpen}
        deleteConfirmationHandler={deleteConfirmationHandler}
        markAsCompleted={(id) => markAsCompletedTodo(id)}
        isCompleted={todo.isCompleted}
      />
    ));
  };

  return (
    <section className={classes.mainContainer}>
      {completedTodos.length === 0 ? (
        <Nodata title="You haven't completed any tasks yet...😥 " />
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

export default CompletedTasks;
