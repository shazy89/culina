import api from "../utils/api";
import { setAlert } from "./alert";
import { GET_COMPANIES, COMPANIES } from "./types";

// Fetch all companies
export const getCompanies = () => async (dispatch) => {
  try {
    const res = await api.get("/companies/all");

    dispatch({
      type: GET_COMPANIES,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};

// Create or update company
export const createOrUpdate = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const res = await api.post("/companies", formData);

    dispatch({
      type: COMPANIES,
      payload: res.data
    });

    dispatch(setAlert(edit ? "Company Updated" : "Company Created", "success"));

    if (!edit) {
      history.push(`companies/${formData._id}`);
    }
  } catch (err) {
    console.error(err);
    let error = err.response.data.error;

    if (error) {
      dispatch(setAlert(error, "danger"));
    }

    //   dispatch({
    //     type: PROFILE_ERROR,
    //     payload: { msg: err.response.statusText, status: err.response.status }
    //   });
  }
};
