import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SearchLocationInput from "./SearchLocationInput";
import PropTypes from "prop-types";

const AddUser = ({
  match: {
    params: { id }
  }
}) => {
  const submit = (params) => {
    debugger;
  };
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          company: id,
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          avatar: "",
          salary: "",
          hrRate: "",
          position: "",
          state: "",
          city: "",
          address: "",
          birthday: "",
          gender: ""
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => {
          console.log(errors);
          return (
            <Form>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" placeholder="password" />
              <ErrorMessage name="password" component="div" />
              <SearchLocationInput />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddUser;
