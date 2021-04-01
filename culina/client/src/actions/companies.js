import api from "../utils/api";
import { GET_COMPANIES } from "./types";

// Fetch all companies
export const getCompanies = () => async (dispatch) => {
  try {
    const res = await api.get("/companies/all");

    dispatch({
      type: GET_COMPANIES,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
// Get all profiles
//   export const getProfiles = () => async (dispatch) => {
//     dispatch({ type: CLEAR_PROFILE });
//
//     try {
//       const res = await api.get("/profile");
//
//       dispatch({
//         type: GET_PROFILES,
//         payload: res.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: PROFILE_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status },
//       });
//     }
//   };
