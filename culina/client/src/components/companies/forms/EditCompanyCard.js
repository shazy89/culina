import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Formik,
  Field,
  Form,
  useField,
  useFormikContext,
  MyField
} from "formik";
import { Button } from "react-bootstrap";
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

const EditCompanyCard = ({ company, className }) => {
  const [formData, setFormData] = useState(initialState);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { name, email, adress, phone, timeZone } = formData;
  useEffect(() => {
    if (company) {
      const companyData = { ...initialState };

      for (const key in company) {
        if (key in companyData) companyData[key] = company[key];
      }
      setFormData(companyData);
    }
  }, []);

  return (
    <div className="company__info">
      {" "}
      <Formik
        initialValues={formData}
        onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
      >
        <div>
          <Form className={"edit--form--section " + className}>
            <div className="u-margin-top">
              <label>
                {" "}
                <Field
                  onChange={onChange}
                  className="text-center edit__input--field company__info--header"
                  name="name"
                  placeholder="Name"
                  value={name}
                />
              </label>
            </div>
            <div className="u-margin-top-big font-size-normal">
              <label>
                <Field
                  className="text-center edit__input--field"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="u-margin-top font-size-normal">
              <label className="font-size-normal">
                <Field
                  onChange={onChange}
                  className="edit__input--field text-center"
                  value={phone}
                  placeholder="Phone"
                  name="phone"
                />
              </label>
              <br />
              <br />
              <label className="font-size-normal">
                <Field
                  onChange={onChange}
                  value={timeZone}
                  className="text-center edit__input--field"
                  placeholder="TimeZone"
                  name="timeZone"
                />
              </label>
            </div>
            <div>
              <label className="font-size-normal">
                <Field
                  onChange={onChange}
                  className="text-center edit__input--field"
                  value={adress}
                  placeholder="Adress"
                  name="adress"
                />
              </label>
            </div>

            <Button className="u-margin-top font-size-normal" variant="primary">
              Submit
            </Button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

EditCompanyCard.propTypes = {
  company: PropTypes.object.isRequired
};

export default EditCompanyCard;
