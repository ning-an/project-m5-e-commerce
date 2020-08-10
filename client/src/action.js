// All data actions

export const requestAllData = () => {
  return { type: "REQUEST_ALL_DATA" };
};

export const receiveAllData = (data) => {
  return { type: "RECEIVE_DATA_SUCCESS", data };
};

export const receiveDataError = (err) => {
  return { type: "RECEIVE_DATA_ERROR", err };
};


// Cart actions

export const addItemToCart = (item, id) => {
  return { type: "ADD_ITEM", item, id };
}

export const removeItemFromCart = (id) => {
  return { type: "REMOVE_ITEM", id };
}

export const updateQuantityFromItem = (id, quantity) => {
  return { type: "UPDATE_QUANTITY_ITEM", id,  quantity };
}