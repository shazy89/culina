import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const Alerts = ({ alerts }) =>
  alerts.map(({ id, msg, type }) => (
    <Alert key={id} variant={type}>
      {msg}
    </Alert>
  ));
Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alerts);
