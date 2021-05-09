import React from "react";
import { Formik } from "formik";
//Field, Form, ErrorMessage, useFormik
import { Form, Col, InputGroup, Button } from "react-bootstrap";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { positions, images } from "./constants";

const AddUser = ({
  match: {
    params: { id }
  },
  location: {
    state: { companyName }
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
      .required("*"),
    birthday: Yup.string().required("Required"),
    position: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zip: Yup.string().required("Required")
  });
  const formatToCurrency = (amount) => {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const submit = (params) => {};

  return (
    <div>
      <h1 className="u-margin-top-3">New </h1>
      <Formik
        initialValues={{
          company: id,
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          avatar:
            "https://res.cloudinary.com/dytheecsk/image/upload/v1620505413/culina/depositphotos_59095205-stock-illustration-businessman-profile-icon_yytrhn.jpg",
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
            <Form className="u-margin-top-big" onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label className="font__size-2">First name</Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                  />
                  {errors.firstName ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.firstName}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label className="font__size-2">Last Name</Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                  />

                  {errors.lastName ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.lastName}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <div className="date--picker">
                    <Form.Label className="font__size-2">Birthday </Form.Label>

                    <DatePicker
                      selected={values.birthday}
                      dateFormat="MMMM d, yyyy"
                      className="form-control font__size-2"
                      name="birthday"
                      onChange={(date) => setFieldValue("birthday", date)}
                    />
                  </div>
                  {errors.birthday ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.birthday}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik04">
                  <Form.Label className="font__size-2">Position</Form.Label>
                  <Form.Control
                    className="font__size-2"
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
                  {errors.position ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.position}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label className="font__size-2">
                    Email address
                  </Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="email"
                    placeholder="johnd@cuina.com"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                  {errors.email ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.email}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label className="font__size-2">Password </Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="password"
                    name="password"
                    placeholder="*********"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />

                  {errors.password ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.password}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="validationFormik01">
                  <Form.Label className="font__size-2">Salary</Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="salary"
                    value={values.salary}
                    onChange={handleChange}
                    isValid={touched.salary && !errors.salary}
                  />
                  {errors.salary ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.salary}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label className="font__size-2">Address</Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    isValid={touched.address && !errors.address}
                  />
                  {errors.address ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.address}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationFormik01">
                  <Form.Label className="font__size-2">City</Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isValid={touched.city && !errors.city}
                  />
                  {errors.city ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.city}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>{" "}
                <Form.Group as={Col} md="2" controlId="validationFormik01">
                  <Form.Label className="font__size-2">State</Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isValid={touched.state && !errors.state}
                  />
                  {errors.state ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.state}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationFormik01">
                  <Form.Label className="font__size-2">Zip Code</Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="zipCode"
                    value={values.zipCode}
                    onChange={handleChange}
                    isValid={touched.zipCode && !errors.zipCode}
                  />
                  {errors.zipCode ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.zipCode}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
              </Form.Row>
              <Button className="font__size-2" type="submit">
                Submit form
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddUser;
