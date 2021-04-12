import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";
import FeaturesNav from "./FeaturesNav";
import Back from "../reusable/Back";
import CompanyInfo from "./CompanyInfo";
import EditCompanyCard from "./forms/EditCompanyCard";
import { Edit, X } from "react-feather";
import Alert from "../layout/Alerts";

const Company = ({
  match: {
    params: { id }
  },

  loading,
  history,
  alerts,
  companies
}) => {
  const [edit, setEdit] = useState(false);
  const findCompany = companies.find((company) => id === company._id);
  const className = edit ? "display_form" : "";

  if (!findCompany) {
    return <Redirect to="/companies" />;
  }

  // const getId = () => {
  //   let id = document.getElementById("hey");
  //   id.className = "blue";
  // };
  console.log(findCompany);
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
                <CompanyInfo company={findCompany} />
              ) : (
                <EditCompanyCard
                  company={findCompany}
                  className={className}
                  setEdit={setEdit}
                />
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
  companies: state.company.companies,
  alerts: state.alert
});

export default connect(mapStateProps, {})(Company);
