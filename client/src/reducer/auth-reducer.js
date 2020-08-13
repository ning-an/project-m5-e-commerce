const initialState = {
  items: null,
  companies: null,
  status: "idle",
  error: null,
  snackBarSuccess: false,
  snackBarFailure: false
};

export default function authReducer(state = initialState, action) {
  const stateCopy = { ...state };
  
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

    case "CHANGE_SNACKBAR_SUCCESS_STATUS": {
      return { ...state, snackBarSuccess: action.snackBarStatus }
    }

    case "CHANGE_SNACKBAR_FAILURE_STATUS": {
      return { ...state, snackBarFailure: action.snackBarStatus }
    }

    case "UPDATE_ITEMS_STOCK": {
      action.purchasedItemArr.forEach(item => {
        stateCopy.items.find(itemsInState => itemsInState.id === item.id).numInStock -= item.quantity;
      });

      return stateCopy;
    }
    
    default:
      return state;
  }
}
