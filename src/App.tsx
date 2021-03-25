import React from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";
import PendingTasks from "./pages/PendingTasks";

function App() {
  return (
    <Layout>
      <Switch>
        <Route  path="/" component={AllTasks} />
        <Route path="/pending-tasks" component={PendingTasks} />
        <Route path="/completed-tasks" component={CompletedTasks} />
      </Switch>
    </Layout>
  );
}

export default App;
