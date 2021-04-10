import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik, Field, Form, useField, useFormikContext } from "formik";

const initialState = {
  name: "",
  email: "",
  adress: "",
  phone: "",
  timeZone: ""
  //  twitter: "",
  //  facebook: "",
  //  linkedin: "",
  //  youtube: "",
  //  instagram: ""
};

const CompanyForm = (props) => {
  return <div>HEY THERE</div>;
};

CompanyForm.propTypes = {};

export default CompanyForm;
