import React from "react";

import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import { newUserSchema } from "./constants";
import Back from "components/reusable/Back";
import { newCompanyUser } from "actions/newUser";
import AddUserFormFields from "./AddUserFormFields";
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
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      <h1 className="u-margin-top-3 text-center">New {companyName} user</h1>
      <AddUserFormFields
        newUserSchema={newUserSchema}
        newCompanyUser={newCompanyUser}
        id={id}
        history={history}
      />
    </>
  );
};

export default connect(null, { newCompanyUser })(AddUser);
