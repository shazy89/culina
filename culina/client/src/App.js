import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginDev from "./components/auth/LoginDev";
import Routes from "./components/routes/routes";
import { loadUser, logout } from "./actions/auth";

const App = ({ loadUser, logout }) => {
  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
    // handle logout if no token
    window.addEventListener("storage", () => {
      if (!localStorage.token) logout();
    });
  }, [loadUser, logout]);
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

export default connect(null, { loadUser, logout })(App);
