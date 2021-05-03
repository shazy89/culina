import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

const AllProjects = () => {
  return <div></div>;
};
AllProjects.propTypes = {};

const mapStateProps = (state) => ({
  loading: state.company.loading,
  companies: state.company.companies,
  alerts: state.alert
});
export default connect(mapStateProps)(AllProjects);
