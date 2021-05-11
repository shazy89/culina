import React from "react";
import { Link } from "react-router-dom";
import Slider from "components/layout/Slider";
import CompanyUserCard from "./companyUsers/CompanyUserCard";
import PropTypes from "prop-types";

const CompanyRight = ({ company, id }) => {
  return (
    <>
      <div className="slider_company">
        <h2 className="slider_company__header">
          {company.name} - Employee List
        </h2>
        {company.users.length ? (
          <Slider component={CompanyUserCard} info={company.users} />
        ) : (
          <h2>
            Please{" "}
            {
              <Link
                to={{
                  pathname: `/companies/${id}/user/new`,
                  state: { companyName: company.name }
                }}
              >
                add
              </Link>
            }{" "}
            users to this company
          </h2>
        )}
      </div>
    </>
  );
};

CompanyRight.propTypes = {};

export default CompanyRight;
