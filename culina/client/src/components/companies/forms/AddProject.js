import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Back from "components/reusable/Back";
const AddProject = ({ history }) => {
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      <h1>HEY THERE</h1>{" "}
    </>
  );
};

export default AddProject;
