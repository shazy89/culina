import React, { useState, useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import placeService from "hooks/PlaceService";

const AddUser = ({
  match: {
    params: { id }
  }
}) => {
  const [query, setQuery] = useState("");
  const [address, setAddress] = useState({
    city: "",
    state: "",
    city: ""
  });
  const autoCompleteRef = useRef(null);
  const [loadScript, handleScriptLoad, addressObj] = placeService();

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  const submit = (params) => {
    debugger;
  };
  console.log(addressObj, "OKKKK");
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
          console.log(query);
          return (
            <Form>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" placeholder="password" />
              <ErrorMessage name="password" component="div" />
              <div className="search-location-input">
                <input
                  ref={autoCompleteRef}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Enter a City"
                  value={query}
                />
              </div>
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
