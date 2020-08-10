const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (state[action.id]) {
        const stateCopy = { ...state };
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
      const stateCopy = { ...state };
      delete stateCopy[action.id];

      return stateCopy;
    }

    case "UPDATE_QUANTITY_ITEM": {
      const stateCopy = { ...state };
      stateCopy[action.id].quantity = action.quantity;

      return stateCopy;
    }

    default:
      return state;
  }
}
