import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Switch } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import CompanyForm from "../companies/CompanyForm";
import AllCompanies from "../companies/AllCompanies";
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
            <PrivateRoute exact path="/company/new" component={CompanyForm} />
            <PrivateRoute exact path="/companies" component={AllCompanies} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Routes;
