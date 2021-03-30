import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Switch } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../layout/NavBar";

const Routes = () => {
  return (
    <section className="routes">
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
