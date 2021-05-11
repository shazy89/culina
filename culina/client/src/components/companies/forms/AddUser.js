import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { positions } from "./constants";
import Back from "components/reusable/Back";
import { newCompanyUser } from "actions/newUser";

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
    <div>
      <div>
        <Back history={history} />
      </div>
      <h1 className="u-margin-top-3 text-center">New {companyName} user</h1>
      <Formik
        initialValues={{
          company: id,
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          avatar:
            "culina/depositphotos_59095205-stock-illustration-businessman-profile-icon_yytrhn.jpg",
          annualSalary: "",
          hrRate: "",
          position: "",
          state: "",
          city: "",
          address: "",
          country: "United States",
          birthday: "",
          zipCode: ""
        }}
        validationSchema={newUserSchema}
        onSubmit={(values, actions) => {
          newCompanyUser(values, history);
          actions.resetForm();
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          setFieldValue,
          handleChange
        }) => {
          return (
            <Form className="u-margin-top-big" onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="firstName">
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
                <Form.Group as={Col} md="4" controlId="lastName">
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
                <Form.Group as={Col} md="4" controlId="birthday">
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
                <Form.Group as={Col} md="4" controlId="position">
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
                <Form.Group as={Col} md="4" controlId="email">
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
                <Form.Group as={Col} md="4" controlId="password">
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
                <Form.Group as={Col} controlId="annualSalary">
                  <Form.Label className="font__size-2">
                    Annual Salary
                  </Form.Label>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="annualSalary"
                    value={values.annualSalary}
                    onChange={handleChange}
                    isValid={touched.annualSalary && !errors.annualSalary}
                  />
                  {errors.annualSalary ? (
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.annualSalary}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="address">
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
                <Form.Group as={Col} md="2" controlId="city">
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
                <Form.Group as={Col} md="2" controlId="state">
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
                <Form.Group as={Col} md="2" controlId="zipCode">
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
              <div className="button-box">
                <Button
                  className="u-margin-top-small button-btn font__size-2"
                  type="submit"
                >
                  Submit form
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default connect(null, { newCompanyUser })(AddUser);
