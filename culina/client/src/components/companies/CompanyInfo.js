import React from "react";
import PropTypes from "prop-types";

const CompanyInfo = ({ company: { name, email, adress, phone, timeZone } }) => {
  return (
    <div className="company__info">
      <div className="u-margin-top">
        <h3 className="company__info--header ">{name}</h3>
      </div>
      <div className="u-margin-top-big">
        <a className="font-size-normal" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <div>
        <p>
          {phone}
          <br />
          {timeZone}
        </p>
      </div>
      <adress>{adress}</adress>
    </div>
  );
};

CompanyInfo.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyInfo;
