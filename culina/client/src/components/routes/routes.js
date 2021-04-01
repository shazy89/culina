import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Switch } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import Navbar from "../layout/NavBar";
import SideNav from "../layout/SideNav";

const Routes = () => {
  return (
    <div className="culina__container">
      <Navbar />
      <div className="culina__content">
        <SideNav />
        <main className="main">
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Routes;
