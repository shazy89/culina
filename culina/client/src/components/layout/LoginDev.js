import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const LoginDev = () => {
  return (
    <section className="login">
      <div className="culina__login--card">
        <div>
          <h1>Sign Into Culina Dev</h1>
        </div>
        <div></div>
      </div>
    </section>
  );
};

LoginDev.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default LoginDev;
