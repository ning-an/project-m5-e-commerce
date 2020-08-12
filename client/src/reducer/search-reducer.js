const initialState = {
  result: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_SEARCH_RESULTS":
      return { result: action.data };
    default:
      return state;
  }
}
