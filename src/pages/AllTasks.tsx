import React, { Dispatch } from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../components/UI/TodoCard";
import { AppState } from "../store";
import { AppActionTypes } from "../store/types/action";
import { REMOVE_TODO } from "../store/actions/actionTypes";
import { TodoState } from "../store/types/stateTypes";
import Nodata from "../components/UI/Nodata";
// react flip move is for animation
// import FlipMove from 'react-flip-move';

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "calc(85vh - 15.625rem)",
    overflow: 'auto'
  },
});

function AllTasks() {
  const classes = useStyles();
  //-----------------------------------------Redux Dispatch with useDispatch hook------------------------------//
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  const removeTodoHandler = (id: string) => {
    dispatch({ type: REMOVE_TODO, id: id });
  };

  //-----------------------------------------Redux state with useSlector hook------------------------------//
  //-----------------------------------------All Todos------------------------------//
  const todos = useSelector((state: AppState) => state.todo.todos);

  const todoLists = () => {
    return todos.map((todo: TodoState) => (
      <TodoCard
        priority={todo.priority}
        onDeleteTodo={removeTodoHandler}
        id={todo.id}
        key={todo.id}
        todoTitle={todo.title}
        todoDescription={todo.description}
        eta={todo.eta}
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
