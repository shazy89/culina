import React from "react";
import { Formik } from "formik";
//Field, Form, ErrorMessage, useFormik
import { Form, Col, InputGroup, Button } from "react-bootstrap";
import * as Yup from "yup";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddUser = ({
  match: {
    params: { id }
  }
}) => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
  });

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
          city: "",
          address: "",
          birthday: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          debugger;
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          setFieldValue,
          isValid,
          handleBlur,
          handleChange
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Position</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="Position"
                      aria-describedby="inputGroupPrepend"
                      name="position"
                      value={values.position}
                      onChange={handleChange}
                      isInvalid={!!errors.position}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.position}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <label htmlFor="birthday">Birthday</label>
              <DatePicker
                selected={values.birthday}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                name="birthday"
                onChange={(date) => setFieldValue("birthday", date)}
              />

              <Button type="submit">Submit form</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddUser;
