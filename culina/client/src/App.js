import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginDev from "./components/auth/LoginDev";
import Routes from "./components/routes/routes";
import { loadUser } from "./actions/auth";

const App = ({ loadUser }) => {
  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  });
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={LoginDev} />
          {<Route component={Routes} />}
        </Switch>
      </Fragment>
    </Router>
  );
};

export default connect(null, { loadUser })(App);
