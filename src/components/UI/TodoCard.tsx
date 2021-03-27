import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { IconButton, Tooltip } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import Badge from "@material-ui/core/Badge";
import UndoIcon from "@material-ui/icons/Undo";

const useStyles = makeStyles({
  root: {
    width: 300,
    minHeight: 300,
    // borderTop: "3px solid #C51162",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  },

  chip: {
    width: "fit-content",
    padding: "3px 15px",
    color: "#C51162",
    backgroundColor: "rgba(197, 17, 98, 0.1)",
    marginTop: "10px",
    borderRadius: "5px",
  },
  cardActionContainer: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

type Props = {
  todoTitle: string;
  todoDescription: string;
  eta: string;
  createdAt: Date | string;
  todoId: string;
  priority: string;
  deleteTodo: () => void;
  markAsCompleted: (id: string) => void;
  isCompleted: boolean;
  onEditTodo: (id: string) => void;
};

export default function TodoCard(props: Props) {
  const classes = useStyles();

  const {
    todoTitle,
    todoDescription,
    eta,
    deleteTodo,
    createdAt,
    onEditTodo,
    todoId,
    priority,

    markAsCompleted,
    isCompleted,
  } = props;

  let borderColor = "";

  if (priority === "high") {
    borderColor = "red";
  }
  if (priority === "medium") borderColor = "#FF8C00";
  if (priority === "low") borderColor = "yellow";

  const onEdit = () => {
    onEditTodo(todoId);
  };

  return (
    <div id="card" style={{ marginTop: "20px" }}>
      {isCompleted && <span className="completed-badge">Completed</span>}
      <Badge
        badgeContent={priority.slice(0, 1).toLocaleUpperCase()}
        color="secondary"
      >
        <Card
          className={classes.root}
          style={{ borderTop: `3px solid ${borderColor}` }}
        >
          <CardContent>
            <div className={classes.chip}>
              <Typography variant="h6" style={{ fontSize: "1.125rem" }}>
                {todoTitle}
              </Typography>
            </div>

            <Typography
              variant="body2"
              component="p"
              style={{ marginTop: "30px" }}
            >
              {todoDescription}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardActionContainer}>
            <div>
              <Typography
                color="secondary"
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  margin: "5px 0",
                  fontWeight: 600
                }}
              >
                created at: {createdAt}
              </Typography>
              <Typography style={{ fontSize: "0.75rem", marginTop: "auto", fontWeight: 600 }}>
                ETA: {eta}
              </Typography>
            </div>

            <div>
              {isCompleted ? (
                <Tooltip title="Undo">
                  <div style={{ display: "inline-block" }}>
                    <IconButton
                      color="secondary"
                      onClick={() => markAsCompleted(todoId)}
                    >
                      <UndoIcon fontSize="small" />
                    </IconButton>
                  </div>
                </Tooltip>
              ) : (
                <Tooltip title="Mark as completed">
                  <div style={{ display: "inline-block" }}>
                    <IconButton
                      color="secondary"
                      onClick={() => markAsCompleted(todoId)}
                    >
                      <DoneIcon fontSize="small" />
                    </IconButton>
                  </div>
                </Tooltip>
              )}

              <Tooltip title="Edit Todo">
                <IconButton color="secondary" onClick={onEdit}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete todo">
                <IconButton color="secondary" onClick={deleteTodo}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </div>
          </CardActions>
        </Card>
      </Badge>
    </div>
  );
}
