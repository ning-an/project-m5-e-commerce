const initialState = {};

export default function cartReducer(state = initialState, action) {
  const stateCopy = { ...state };

  switch (action.type) {
    case "ADD_ITEM":
      if (state[action.id]) {
        stateCopy[action.id].quantity += 1;
        return stateCopy;
      } else {
        return {
          ...state,
          [action.id]: {
            ...action.item,
            quantity: 1,
          },
        };
      }

    case "REMOVE_ITEM": {
      delete stateCopy[action.id];
      return stateCopy;
    }

    case "UPDATE_QUANTITY_ITEM": {
      stateCopy[action.id].quantity = action.quantity;
      return stateCopy;
    }

    default:
      return state;
  }
}
