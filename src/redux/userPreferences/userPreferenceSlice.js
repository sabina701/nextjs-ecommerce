import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  showCart: true,
};

export const userPreferenceSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});
export const { toggleTheme } = userPreferenceSlice.actions;
export default userPreferenceSlice.reducer;
