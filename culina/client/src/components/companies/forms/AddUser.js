import React from "react";
import { Formik } from "formik";
//Field, Form, ErrorMessage, useFormik
import { Form, Col, InputGroup, Button } from "react-bootstrap";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { positions } from "./constants";

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
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("*")
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
          state: "",
          city: "",
          address: "",
          country: "United States",
          birthday: "",
          zipCode: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
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
                <Form.Group as={Col} md="4" controlId="validationFormik02">
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
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <div className="date--picker">
                    <Form.Label>Birthday </Form.Label>

                    <DatePicker
                      selected={values.birthday}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="birthday"
                      onChange={(date) => setFieldValue("birthday", date)}
                    />
                  </div>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    name="position"
                    onChange={handleChange}
                    value={values.position}
                    as="select"
                    custom
                  >
                    {positions.map((position, index) => (
                      <option key={index}>{position}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik01">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="johnd@cuina.com"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                  <p>{errors.email && errors.email}</p>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik02">
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="*********"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />

                  <p>{errors.password && errors.password}</p>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik02">
                  <Form.Label>Password Confirm</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="*********"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />

                  <p>{errors.password && errors.password}</p>
                </Form.Group>
              </Form.Row>

              <Button type="submit">Submit form</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddUser;
