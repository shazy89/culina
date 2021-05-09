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
  const formatToCurrency = (amount) => {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const submit = (params) => {};

  return (
    <div>
      <h1 className="u-margin-top-3">Anywhere in your app!</h1>
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
                  <Form.Control.Feedback className="font__size-1">
                    Looks good!
                  </Form.Control.Feedback>
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

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                  <p>{errors.email && errors.email}</p>
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

                  <p>{errors.password && errors.password}</p>
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
                  <p>{errors.salary && errors.salary}</p>
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
                  <Form.Control.Feedback className="font__size-1">
                    Looks good!
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback className="font__size-1">
                    Looks good!
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback className="font__size-1">
                    Looks good!
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback className="font__size-1">
                    Looks good!
                  </Form.Control.Feedback>
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
