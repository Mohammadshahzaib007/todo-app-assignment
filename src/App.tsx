import React from "react";
import { Route, Switch, withRouter } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "./components/Layout/Layout";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import PendingTasks from "./pages/PendingTasks";

// for animating routes
const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={1000}>
      <Switch>
        <Route exact path="/" component={AllTasks} />
        <Route path="/pending-tasks" component={PendingTasks} />
        <Route path="/completed-tasks" component={CompletedTasks} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function App() {
  return (
    <div style={{ display: "relative" }}>
      <Layout>
        <AnimatedSwitch />
      </Layout>
    </div>
  );
}

export default App;
