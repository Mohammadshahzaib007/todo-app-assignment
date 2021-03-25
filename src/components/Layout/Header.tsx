import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "15.625rem",
    background: "#d4f1f9",
  },
  button: {
    marginTop: "10px",
    borderRadius: "20px",
  },
  linkContainer: {
    padding: "20px 0",
  },
});

function Header() {
  const classes = useStyles();

  // this data for looping
  const NavLinks: Array<{ name: string; link: string }> = [
    { name: "all tasks", link: "/" },
    { name: "pending tasks", link: "/pending-tasks" },
    { name: "completed", link: "/completed-tasks" },
  ];

  return (
    <>
      <section className={classes.header}>
        <Container className="fullWidthAndHeight">
          <Grid
            container
            className="fullWidthAndHeight"
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Typography
              variant="h4"
              style={{ textTransform: "uppercase", fontSize: "1.4rem" }}
            >
              start adding Tasks
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Grid>
        </Container>
      </section>
      <section className={classes.linkContainer}>
        <Container>
          <Grid container>
            {NavLinks.map((item, i) => (
              <Grid item container justify="center" xs={4} key={i}>
                <NavLink
                  exact
                  to={item.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button size="large" color="secondary">
                    {item.name}
                  </Button>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default Header;
