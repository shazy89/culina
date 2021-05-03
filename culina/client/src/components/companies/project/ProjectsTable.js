import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal, Table } from "react-bootstrap";

const ProjectsTable = ({ projects }) => {
  const table = projects.map((project, index) => {
    return (
      <tr key={index}>
        <th>{index}</th>
        <th>{project.projectName}</th>
        <th>{project.contactName}</th>
        <th>{project.email}</th>
      </tr>
    );
  });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Contact Name</th>
          <th>email</th>
          <th>Project</th>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </Table>
  );
};
ProjectsTable.propTypes = {};

const mapStateProps = (state) => ({
  loading: state.company.loading,
  companies: state.company.companies,
  alerts: state.alert
});
export default connect(mapStateProps)(ProjectsTable);
