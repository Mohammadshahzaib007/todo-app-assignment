import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 275,
    minHeight: 275,
    borderTop: "3px solid #C51162",
    display: 'flex',
    flexDirection: 'column'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
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
  },
});

export default function TodoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.chip}>
          <Typography>complete your assignment</Typography>
        </div>

        <Typography variant="body2" component="p" style={{ marginTop: "30px" }}>
          description...
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActionContainer}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
