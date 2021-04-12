import React from "react";
import { Row, Col } from "react-bootstrap";
const inputData = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "adress", type: "text" },
  { name: "phone", type: "text" },
  { name: "timeZone", type: "text" },
  { name: "logo", type: "file" }
];

const FormInput = ({ onChange }) => {
  return (
    <>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="name">
            Name
          </label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="name"
            id="name"
            type="text"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="email">
            Email
          </label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="email"
            id="email"
            type="email"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="adress"></label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="adress"
            id="adress"
            type="adress"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
    </>
  );
};

export default FormInput;
