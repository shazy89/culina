import React from "react";

import {
  Image as CloudinaryImage,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";

const CompanyUserCard = ({ info: { firstName, lastName, avatar } }) => {
  return (
    <div className="slider--box">
      <CloudinaryImage
        className="slider--circle__image"
        cloudName="dytheecsk"
        publicId="portfolio/me_ocryct.jpg"
      >
        <Transformation width="130" crop="scale" />
      </CloudinaryImage>

      <h2>{firstName + " " + lastName}</h2>
    </div>
  );
};

export default CompanyUserCard;

//<div className="slider--circle">
//<img className="slider--circle__image" src={avatar} alt="user image" />
//</div>
//    <RoundedCircle
//    className="slider--circle__image"
//    src="https://res.cloudinary.com/dytheecsk/image/upload/v1616517786/Friends/eizimamzohzcdpb3lw2y.jpg"
//    roundedCircle
//    thumbnail
//    />
