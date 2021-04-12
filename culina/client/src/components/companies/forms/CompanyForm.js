import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./FormInput";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import { createOrUpdate } from "../../../actions/companies";
import Alert from "../../layout/Alerts";

const initialState = {
  name: "",
  email: "",
  adress: "",
  phone: "",
  timeZone: "",
  logo: ""
};

const CompanyForm = ({ history, alerts, createOrUpdate }) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createOrUpdate(formData, history);
  };

  return (
    <div>
      <h1>New Company</h1>
      <div>
        <Container>
          {alerts && <Alert />}
          <form onSubmit={onSubmit} className="newCompany">
            <FormInput onSubmit={onSubmit} />
            <div className="button-box">
              <Button
                type="submit"
                variant="success"
                className="u-margin-top-small button-btn"
              >
                Submit
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});
export default connect(mapStateProps, { createOrUpdate })(CompanyForm);
