import api from "../utils/api";
import { setAlert } from "./alert";
import { NEW_COMPANY_USER } from "./types";

export const newCompanyUser = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post(`/culina/${formData.company}/newuser`, formData);
    debugger;
    dispatch({
      type: NEW_COMPANY_USER,
      payload: res.data.company
    });
    history.push(`/companies/${formData.company}`);
    dispatch(setAlert("Sucsess", "success"));
  } catch (err) {
    if (err) {
      dispatch(setAlert("Please try again", "danger"));
    }
  }
};

export const a = (userInfo) => async (dispatch) => {
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
