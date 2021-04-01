import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Switch } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import CompanyForm from "../companies/CompanyForm";
import AllCompanies from "../companies/AllCompanies";
import Company from "../companies/Company";
import Navbar from "../layout/NavBar";
import SideNav from "../layout/sidebar/SideNav";

const Routes = () => {
  return (
    <div className="culina__container">
      <Navbar />
      <div className="culina__content">
        <SideNav />
        <main className="main">
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/restaurant/new"
              component={CompanyForm}
            />
            <PrivateRoute exact path="/restaurants" component={AllCompanies} />
            <PrivateRoute exact path="/restaurants/:id" component={Company} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Routes;
