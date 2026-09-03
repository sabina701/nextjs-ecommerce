import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userPreferenceReducer from "./userPreferences/userPreferenceSlice";
import authReducer from "./auth/authSlice";
const rootReducer = combineReducers({
  counter: counterReducer,
  userPreference: userPreferenceReducer,
  auth: authReducer,
});

export default rootReducer;
