import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCompanies } from "../../actions/companies";
import Spinner from "../layout/Spinner";
import CompanyCard from "./CompanyInfoCard";

const AllCompanies = ({ companies, getCompanies, loading }) => {
  const displayCompanies = companies.map((company) => (
    <CompanyCard key={company._id} company={company} />
  ));

  useEffect(() => {
    if (!companies.length) {
      getCompanies();
    }
  }, [getCompanies, companies]);

  return (
    <>
      <div className="companies__header">
        <h1>All Companies</h1>
      </div>
      <div className="flex__container">
        {loading && <Spinner />}
        {!loading && displayCompanies}
      </div>
    </>
  );
};

AllCompanies.propTypes = {
  companies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    companies: state.company.companies,
    loading: state.company.loading
  };
};

export default connect(mapStateToProps, { getCompanies })(AllCompanies);
