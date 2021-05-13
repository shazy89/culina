import React from "react";
import AddUserFormFields from "../forms/AddUserFormFields";
import { connect } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import { newUserSchema } from "../forms/constants";
import Back from "components/reusable/Back";
import { newCompanyUser } from "actions/newUser";
const EditUser = ({
  match: {
    params: { id }
  },
  location: {
    state: { profileInfo }
  },
  history
}) => {
  return (
    <>
      <h2>Edit</h2>
      <AddUserFormFields
        id={id}
        profileInfo={profileInfo}
        newUserSchema={newUserSchema}
        newCompanyUser={newCompanyUser}
      />
    </>
  );
};

export default EditUser;
