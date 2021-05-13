import api from "../utils/api";
import { setAlert } from "./alert";
import { NEW_COMPANY_USER } from "./types";

//new or edit
export const newCompanyUser = (formData, edit, history) => async (dispatch) => {
  try {
    if (edit) {
      debugger;
    }
    if (!edit) {
      const res = await api.post(
        `/culina/${formData.company}/newuser`,
        formData
      );

      dispatch({
        type: NEW_COMPANY_USER,
        payload: res.data.company
      });
      history.push(`/companies/${formData.company}`);
      dispatch(setAlert("Sucsess", "success"));
    }
  } catch (err) {
    if (err) {
      dispatch(setAlert("Please try again", "danger"));
    }
  }
};

export const editCompanyUser = (userInfo, history) => async (dispatch) => {
  try {
  } catch (error) {}
};
export const b = (userInfo) => async (dispatch) => {
  try {
  } catch (err) {
    if (err) {
      dispatch(setAlert("Please try again", "danger"));
    }
  }
};
