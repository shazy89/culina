import { GET_COMPANIES, COMPANIES, NEW_COMPANY } from "../actions/types";
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
    case NEW_COMPANY:
      return {
        ...state,
        companies: [...state.companies, payload],
        loading: false
      };
    case COMPANIES:
      return {
        ...state,
        companies: state.companies.map((company) =>
          company._id === payload._id ? payload : company
        ),
        loading: false
      };

    default:
      return state;
  }
}
