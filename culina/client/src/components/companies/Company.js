import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";
import FeaturesNav from './FeaturesNav';

const Company = ({ location: { company }, loading }) => {
  if (!company) {
    return <Redirect to="/companies" />;
  }
  // const getId = () => {
  //   let id = document.getElementById("hey");
  //   id.className = "blue";
  // };
  console.log(company);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="company">
          <div className="company__features--box">
            <FeaturesNav />
          </div>
          <div>
            <div className="company__display--box-1"></div>
            <div className="company__display--box-2"></div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateProps = (state) => ({
  loading: state.company.loading
});

export default connect(mapStateProps)(Company);
