import api from "../utils/api";
import { LOGIN_SUCCESS } from "./types";
// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("company/signin", body);
    debugger;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    //   dispatch(loadUser());
  } catch (err) {
    console.error(err);
    // const errors = err.response.data.errors;

    //   if (errors) {
    //     errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    //   }

    //   dispatch({
    //     type: LOGIN_FAIL,
    //   });
  }
};
