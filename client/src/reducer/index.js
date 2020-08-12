import { combineReducers } from "redux";

import auth from "./auth-reducer";
import cart from "./cart-reducer";
import searchResult from "./search-reducer";

export default combineReducers({ auth, cart, searchResult });
