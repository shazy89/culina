import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";

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
        <>
          <div className="company__features--box">
            <h1 id="hey">{company.email}</h1>
          </div>
          <div className="company__display--box">

          </div>
        </>
      )}
    </>
  );
};

const mapStateProps = (state) => ({
  loading: state.company.loading
});

export default connect(mapStateProps)(Company);
