import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginDev from "./components/layout/LoginDev";
//import Routes from "./components/routes/Routes";

const App = () => {
  return (
    <Router>
      <Fragment>
        {
          // <Navbar />
        }
        <Switch>
          <Route exact path="/" component={LoginDev} />
          {
            //<Route component={Routes} />
          }
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
