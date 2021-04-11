import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";
import FeaturesNav from "./FeaturesNav";
import Back from "../reusable/Back";
import CompanyInfo from "./CompanyInfo";
import EditCompanyCard from "./forms/EditCompanyCard";
import { Edit, X } from "react-feather";
import Alert from "../layout/Alerts";

const Company = ({ location: { company }, loading, history, alerts }) => {
  const [edit, setEdit] = useState(false);
  const className = edit ? "display_form" : "";
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
          <Back history={history} />
          {alerts && <Alert />}
          <div className="company__display">
            <div className="company__display--box-1">
              <div className="company__edit">
                {!edit && (
                  <Edit
                    className="company__edit--button"
                    onClick={() => setEdit(true)}
                  ></Edit>
                )}

                {edit && (
                  <X
                    className="company__edit--button"
                    onClick={() => setEdit(false)}
                  ></X>
                )}
              </div>
              {!edit ? (
                <CompanyInfo company={company} />
              ) : (
                <EditCompanyCard company={company} className={className} />
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
  loading: state.company.loading,
  alerts: state.alert
});

export default connect(mapStateProps, {})(Company);
