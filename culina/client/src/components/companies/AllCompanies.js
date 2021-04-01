import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCompanies } from "../../actions/companies";
import Spinner from "../layout/Spinner";

const AllCompanies = ({ companies, getCompanies, loading }) => {
  let displayCompanies = companies.map((company) => <h3>{company.name}</h3>);
  useEffect(() => {
    if (!companies.length) {
      getCompanies();
    }
  }, [getCompanies, companies.length]);

  return (
    <div>
      <h1>All Companies</h1>
      {loading && <Spinner />}
      {!loading && displayCompanies}
    </div>
  );
};

AllCompanies.propTypes = {
  companies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    companies: state.company.companies,
    loading: state.company.loading,
  };
};

export default connect(mapStateToProps, { getCompanies })(AllCompanies);
