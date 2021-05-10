import api from "../utils/api";
import { setAlert } from "./alert";
import { NEW_COMPANY_USER } from "./types";

export const newCompanyUser = (formData) => async (dispatch) => {
  try {
    const res = await api.post(
      `/companies/${formData.company}/user/new`,
      formData
    );
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
