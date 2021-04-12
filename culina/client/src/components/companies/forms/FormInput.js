import React from "react";
import { Row, Col } from "react-bootstrap";

const FormInput = ({ onChange, info: { name, type } }) => {
  return (
    <Row>
      <Col sm="2">
        <label className="input--label u-margin-top" name={name}>
          {name}
        </label>
      </Col>
      <Col sm="8">
        <input
          onChange={onChange}
          type={type}
          name={name}
          id={name}
          className="input--field u-margin-top"
        />
      </Col>
    </Row>
  );
};

export default FormInput;
