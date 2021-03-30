import api from "../utils/api";
import { LOGIN_SUCCESS, USER_LOADED, CLEAR_PROFILE, LOGOUT } from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    //  dispatch({
    //    type: AUTH_ERROR,
    //  });
  }
};
// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("auth/signin", body);
    await localStorage.setItem("token", res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
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

// LOGOUT

export const logout = (history) => (dispatch) => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  history.push("/");
};
