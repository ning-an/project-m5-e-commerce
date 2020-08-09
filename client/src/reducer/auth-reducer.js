const { isValidElement } = require("react");

const initialState = {
  items: null,
  companies: null,
  status: "idle",
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_DATA":
      return { ...state, status: "loading" };
    case "RECEIVE_DATA_SUCCESS":
      return {
        ...state,
        status: "success",
        items: action.data.items,
        companies: action.data.companies,
      };
    case "RECEIVE_DATA_ERROR":
      return { ...state, status: "error", error: action.err };
    default:
      return state;
  }
}
