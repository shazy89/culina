import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";

const Company = ({ location: { company }, loading }) => {
  if (!company) {
    return <Redirect to="/restaurants" />;
  }
  // const getId = () => {
  //   let id = document.getElementById("hey");
  //   id.className = "blue";
  // };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 id="hey">{company.email}</h1>
        </div>
      )}
    </>
  );
};

const mapStateProps = (state) => ({
  loading: state.company.loading,
});

export default connect(mapStateProps)(Company);
