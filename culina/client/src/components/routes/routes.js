import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Switch } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../layout/NavBar";
import SideNav from "../layout/SideNav";

const Routes = () => {
  return (
    <section className="routes">
      <Navbar />
      <div className="culina__content">
        <SideNav />
        <Switch>
          <main className="main">
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </main>
        </Switch>
      </div>
    </section>
  );
};

export default Routes;
