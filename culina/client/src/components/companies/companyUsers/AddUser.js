import React, { useState, useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import placeService from "hooks/PlaceService";

const AddUser = ({
  match: {
    params: { id }
  }
}) => {
  const [query, setQuery] = useState("");
  const [loadScript, handleScriptLoad] = placeService();
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  const submit = (params) => {
    debugger;
  };
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required")
  });

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
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <label htmlFor="lastName">password</label>
            <Field id="password" name="password" placeholder="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
