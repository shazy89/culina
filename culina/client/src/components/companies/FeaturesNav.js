import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

const FeaturesNav = (props) => {
  return (
    <>
      <Button className="btn-features" variant="primary">
        Primary
      </Button>
      <Button className="btn-features" variant="success">
        Success
      </Button>
      <Button className="btn-features" variant="success">
        Success
      </Button>
      <Button className="btn-features" variant="success">
        Success
      </Button>
      <Button className="btn-features" variant="success">
        Success
      </Button>
    </>
  );
};

FeaturesNav.propTypes = {};

export default FeaturesNav;
