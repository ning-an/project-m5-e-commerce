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
};

export const removeItemFromCart = (id) => {
  return { type: "REMOVE_ITEM", id };
};

export const clearAllItemsInCart = () => {
  return { type: "CLEAR_CART_ITEM" };
};

export const incrementItemQuantityBy1 = (id) => {
  return { type: "INCREMENT_ITEM_QUANTITY", id };
};

export const decrementItemQuantityBy1 = (id) => {
  return { type: "DECREMENT_ITEM_QUANTITY", id };
};

//search results
export const storeSearchResults = (data) => {
  return { type: "STORE_SEARCH_RESULTS", data };
};
