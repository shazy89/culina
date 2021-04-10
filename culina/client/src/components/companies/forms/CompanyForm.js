import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Formik, Field, Form, useField, useFormikContext } from "formik";

const initialState = {
  name: "",
  email: "",
  adress: "",
  phone: "",
  timeZone: "",
  logo: ""
  //  twitter: "",
  //  facebook: "",
  //  linkedin: "",
  //  youtube: "",
  //  instagram: ""
};

const CompanyForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  return <div>HEY THERE</div>;
};

CompanyForm.propTypes = {};

const mapStateToProps = (state) => ({
  company: state.company
});

export default connect(mapStateToProps)(CompanyForm);
