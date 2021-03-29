import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const LoginDev = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    alert(email);
    // login(email, password);
  };

  //if (isAuthenticated) {
  //  return <Redirect to="/dashboard" />;
  //}
  return (
    <section className="login">
      <div className="culina__auth--card">
        <div>
          <h1 className="culina__auth--header">Sign Into Culina Dev</h1>
        </div>
        <div>
          <form className="culina__auth--form" onSubmit={onSubmit}>
            <div className="culina__auth--form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="culina__auth--form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
              />
            </div>
            <Button type="submit" variant="primary" className="btn btn-primary">
              Log In
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

LoginDev.propTypes = {
  login: PropTypes.func.isRequired,
  //  isAuthenticated: PropTypes.bool,
};

export default LoginDev;
