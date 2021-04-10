import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";
import FeaturesNav from "./FeaturesNav";
import Back from "../reusable/Back";
import CompanyInfo from "./CompanyInfo";
import EditCompanyCard from "./forms/EditCompanyCard";

const Company = ({ location: { company }, loading, history }) => {
  const [edit, setEdit] = useState(false);

  if (!company) {
    return <Redirect to="/companies" />;
  }
  const name = false;
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
          <Back history={history} />
          <div className="company__display">
            <div className="company__display--box-1">
              {!edit && <button onClick={() => setEdit(true)}>edit</button>}
              {edit && <button onClick={() => setEdit(false)}>Company</button>}
              {!edit ? (
                <CompanyInfo company={company} />
              ) : (
                <EditCompanyCard company={company} />
              )}
            </div>
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
