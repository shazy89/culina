import React, { useState } from "react";
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

const EditCompanyCard = ({
  company: { name, email, adress, phone, timeZone }
}) => {
  const [formData, setFormData] = useState(initialState);

  return (
    <div className="company__info">
      {" "}
      <Formik
        initialValues={formData}
        onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
      >
        <div>
          <Form className="edit--form--section">
            <div className="u-margin-top">
              <label className="company__info--header">
                {" "}
                <Field className="text-center" name="textA" value={name} />
              </label>
            </div>
            <div className="u-margin-top-big font-size-normal">
              <label>
                textB
                <Field
                  className="text-center"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="u-margin-top font-size-normal">
              <label className="font-size-normal">
                textB
                <Field className="text-center" name="textB" />
              </label>
              <br />
              <br />
              <label className="text-center font-size-normal">
                textB
                <Field name="textB" />
              </label>
            </div>
            <div>
              <label className="font-size-normal">
                textB
                <Field className="text-center " name="textB" />
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
