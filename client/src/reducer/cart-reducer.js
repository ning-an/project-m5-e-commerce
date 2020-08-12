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

    case "CLEAR_CART_ITEM": {
      return {};
    }
    
    case "INCREMENT_ITEM_QUANTITY": {
      stateCopy[action.id].quantity += 1;
      return stateCopy;
    }
    
    case "DECREMENT_ITEM_QUANTITY": {
      stateCopy[action.id].quantity -= 1;
      if(stateCopy[action.id].quantity < 0) stateCopy[action.id].quantity = 0;
      return stateCopy;
    }

    default:
      return state;
  }
}
