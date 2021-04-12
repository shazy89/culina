import React, { useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import FormInput from "./FormInput";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";

const initialState = {
  name: "",
  email: "",
  adress: "",
  phone: "",
  timeZone: "",
  logo: ""
};
const inputData = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "adress", type: "text" },
  { name: "phone", type: "text" },
  { name: "timeZone", type: "text" },
  { name: "logo", type: "file" }
];

const CompanyForm = () => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const displayInputs = useMemo(
    () =>
      inputData.map((info) => (
        <FormInput key={uuidv4()} info={info} onChange={onChange} />
      )),
    [inputData]
  );

  return (
    <div>
      <h1>New Company</h1>
      <div>
        <Container>
          <form action="" className="newCompany">
            {displayInputs}
            <div className="button-box">
              <Button type="submit" className="u-margin-top button-btn">
                Submit
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default CompanyForm;
