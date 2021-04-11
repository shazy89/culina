import { GET_COMPANIES, COMPANIES } from "../actions/types";
const initialState = { companies: [], loading: true };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: payload,
        loading: false
      };
    case COMPANIES:
      return {
        ...state,
        companies: [...state.companies, payload],
        loading: false
      };

    default:
      return state;
  }
}
