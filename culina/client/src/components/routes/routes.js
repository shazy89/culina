import React from "react";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../dashboard/Dashboard";

const Routes = () => {
  return (
    <section className="routes">
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </section>
  );
};

export default Routes;
