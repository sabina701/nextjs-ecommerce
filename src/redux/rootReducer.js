import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userPreferenceReducer from "./userPreferences/userPreferenceSlice";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
const rootReducer = combineReducers({
  counter: counterReducer,
  userPreference: userPreferenceReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
