import React from "react";
import AddUserFormFields from "../forms/AddUserFormFields";

import "react-datepicker/dist/react-datepicker.css";
import { newUserSchema } from "../forms/constants";
import Back from "components/reusable/Back";

const EditUser = ({
  match: {
    params: { id }
  },
  location: {
    state: { profileInfo }
  },
  history
}) => {
  const edit = true;
  return (
    <>
      <div>
        <Back history={history} />
      </div>
      <h2 className="text-center">
        Edit {profileInfo.firstName + " " + profileInfo.lastName}'s profile
      </h2>
      <AddUserFormFields
        id={id}
        profileInfo={profileInfo}
        newUserSchema={newUserSchema}
        history={history}
        edit={edit}
      />
    </>
  );
};

export default EditUser;
