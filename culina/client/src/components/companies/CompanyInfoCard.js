import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompanyInfoCard = ({ company }) => {
  console.log(company);
  return (
    <Link
      key={company._id}
      to={{
        pathname: `/companies/${company._id}`,
        company
      }}
    >
      <Card className="card__text">
        <Card.Body>
          <Card.Title className="company__header-text">Card Title</Card.Title>
          <Card.Text className="company__paragraph-text">
            Some quick example text to build on the
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

CompanyInfoCard.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyInfoCard;
