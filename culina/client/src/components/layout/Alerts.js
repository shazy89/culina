import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const Alerts = ({ alerts }) =>
  alerts.map(({ id, msg, alertType }) => (
    <Alert key={id} className="alerts" variant={alertType}>
      {msg}
    </Alert>
  ));
Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    alerts: state.alert,
  };
};

export default connect(mapStateToProps)(Alerts);
