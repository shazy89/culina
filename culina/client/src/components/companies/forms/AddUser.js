import React, { useState } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { positions } from "./constants";
import Back from "components/reusable/Back";
import { newCompanyUser } from "actions/newUser";
import AddUserFormFields from "./AddUserFormFields";
const AddUser = ({
  match: {
    params: { id }
  },
  location: {
    state: { companyName }
  },
  history,
  newCompanyUser
}) => {
  const newUserSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    birthday: Yup.string().required("Required"),
    position: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    annualSalary: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zipCode: Yup.string().required("Required")
  });

  return (
    <>
      <div>
        <Back history={history} />
      </div>
      <h1 className="u-margin-top-3 text-center">New {companyName} user</h1>
      <AddUserFormFields
        newUserSchema={newUserSchema}
        newCompanyUser={newCompanyUser}
        id={id}
        history={history}
      />
    </>
  );
};

export default connect(null, { newCompanyUser })(AddUser);
