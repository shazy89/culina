import api from "../utils/api";
import { GET_COMPANIES } from "./types";

export const allCompanies = async (dispatch) => {
  const res = await api.get("/");
};

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
