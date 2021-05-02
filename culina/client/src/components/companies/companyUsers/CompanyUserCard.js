import React from "react";
import { Image } from "react-bootstrap";

const CompanyUserCard = ({ info: { firstName, lastName, avatar } }) => {
  return (
    <div className="slider--box">
      <Image
        className="slider--circle__image"
        src={avatar}
        roundedCircle
        thumbnail
      />

      <h2>{firstName + " " + lastName}</h2>
    </div>
  );
};

export default CompanyUserCard;

//<div className="slider--circle">
//<img className="slider--circle__image" src={avatar} alt="user image" />
//</div>
