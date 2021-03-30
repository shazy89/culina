import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Dashboard = ({ logout, isAuthenticated, history }) => {
  const onClick = () => logout(history);

  return (
    <div>
      <h1>HellO there</h1>
      <button onClick={onClick}>LOGOUT</button>
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
export default connect(mapStateToProps, { logout })(Dashboard);
