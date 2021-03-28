import React from "react";
import { Container, makeStyles, Grid, useMediaQuery } from "@material-ui/core";
import { useSelector } from "react-redux";
import TodoCard from "../components/UI/TodoCard";
import { AppState } from "../store";
import { TodoState } from "../store/types/stateTypes";
import Nodata from "../components/UI/Nodata";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AppActionTypes } from "../store/types/action";
import { openSnackbar } from "../store/actions/snackbar";
import { editTodo, markAsCompleted, removeTodo } from "../store/actions/todo";
import { openAddTodoModal } from "../store/actions/addTodoModal";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "calc(85vh - 15.625rem)",
  },
});

function AllTasks() {
  const classes = useStyles();

  // for responsiveness
  const isSmallDevice = useMediaQuery("(max-width:600px)");

  //-----------------------------------------Redux Dispatch with useDispatch hook------------------------------//
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  const deleteTodo = (id: string) => {
    dispatch(removeTodo(id));

    dispatch(
      openSnackbar({
        color: "success",
        open: true,
        content: "Todo deleted successfully",
      })
    );
  };

  // for marking todo as completed or undo
  const markAsCompletedTodo = (id: string) => {
    dispatch(markAsCompleted(id));
  };

  //-----------------------------------------Redux state with useSlector hook------------------------------//
  //-----------------------------------------All Todos------------------------------//
  const todos = useSelector((state: AppState) => state.todo.todos);

  //-----------------------------------------edit todo------------------------------//
  const editSelectedTodo = (id: string) => {
    dispatch(openAddTodoModal());
    dispatch(editTodo(id));
  };

  const todoLists = () => {
    return todos.map((todo: TodoState) => (
      <TodoCard
        key={todo.id}
        priority={todo.priority}
        todoId={todo.id}
        todoTitle={todo.title}
        todoDescription={todo.description}
        eta={todo.eta}
        deleteTodo={() => deleteTodo(todo.id)}
        createdAt={todo.createdAt}
        markAsCompleted={(id) => markAsCompletedTodo(id)}
        isCompleted={todo.isCompleted}
        onEditTodo={editSelectedTodo}
      />
    ));
  };

  return (
    <section className={classes.mainContainer}>
      {todos.length === 0 ? (
        <Nodata title="There aren't any tasks for today..😊 " />
      ) : (
        <Container>
          <Grid
            container
            wrap="wrap"
            justify={isSmallDevice ? "center" : "flex-start"}
          >
            {todoLists()}
          </Grid>
        </Container>
      )}
    </section>
  );
}

export default AllTasks;
