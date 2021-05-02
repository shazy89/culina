import React from "react";

const CompanyUserCard = ({ info: { firstName, lastName, avatar } }) => {
  return (
    <div className="slider--box">
      <h2>{firstName + " " + lastName}</h2>
    </div>
  );
};

export default CompanyUserCard;
