import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
const initialState = {
  _id: "",
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

  const { name, email, adress, phone, timeZone } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    if (company) {
      const companyData = { ...initialState };

      for (const key in company) {
        if (key in companyData) companyData[key] = company[key];
      }
      setFormData(companyData);
    }
  }, [company]);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="company__info">
      <div>
        <form
          onSubmit={onSubmit}
          className={"edit--form--section " + className}
        >
          <div className="u-margin-top">
            <input
              onChange={onChange}
              className="text-center edit__input--field company__info--header"
              name="name"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="u-margin-top-big font-size-normal">
            <label>
              <input
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
              <input
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
              <input
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
              <input
                onChange={onChange}
                className="text-center edit__input--field"
                value={adress}
                placeholder="Adress"
                name="adress"
              />
            </label>
          </div>

          <Button
            className="u-margin-top font-size-normal"
            type="submit"
            variant="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

EditCompanyCard.propTypes = {
  company: PropTypes.object.isRequired
};

export default EditCompanyCard;
