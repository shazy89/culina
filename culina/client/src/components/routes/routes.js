import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Route, Switch } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import CompanyForm from "../companies/forms/CompanyForm";
import AllCompanies from "../companies/AllCompanies";
import Company from "../companies/Company";
import Navbar from "../layout/NavBar";
import SideNav from "../layout/sidebar/SideNav";
import NotFound from "../NotFound";
import AddUser from "components/companies/companyUsers/AddUser";

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
            <PrivateRoute exact path="/companies/:id" component={Company} />
            <PrivateRoute
              exact
              path="/companies/:id/user/new"
              component={AddUser}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Routes;
