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

const useStyles = makeStyles({
  root: {
    width: 300,
    minHeight: 300,
    borderTop: "3px solid #C51162",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  },

  chip: {
    width: "fit-content",
    padding: "3px 15px",
    color: "#C51162",
    backgroundColor: "rgba(197, 17, 98, 0.1)",

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
  onDeleteTodo: (id:string) => void;
  id: string
};

export default function TodoCard(props: Props) {
  const classes = useStyles();

  const { todoTitle, todoDescription, eta, onDeleteTodo, id } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.chip}>
          <Typography variant="h6" style={{ fontSize: "1.125rem" }}>
            {todoTitle}
          </Typography>
        </div>

        <Typography variant="body2" component="p" style={{ marginTop: "30px" }}>
          {todoDescription}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActionContainer}>
        <Typography style={{ fontSize: "0.75rem" }}>ETA: {eta}</Typography>

        <div>
          <Tooltip title="Mark as completed">
            <IconButton color="secondary">
              <DoneIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit Todo">
            <IconButton color="secondary">
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete todo">
            <IconButton color="secondary" onClick={() => onDeleteTodo(id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
    </Card>
  );
}
