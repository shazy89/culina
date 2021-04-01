import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCompanies } from "../../actions/companies";

const AllCompanies = ({ companies, getCompanies }) => {
  console.log(companies);
  useEffect(() => {
    if (!companies.length) {
      getCompanies();
    }
  }, [getCompanies, companies.length]);

  return (
    <div>
      <h1>All Companies</h1>
    </div>
  );
};

AllCompanies.propTypes = {};

const mapStateToProps = (state) => {
  return {
    companies: state.company.companies,
    loading: state.company.loading,
  };
};
export default connect(mapStateToProps, { getCompanies })(AllCompanies);
