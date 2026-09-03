import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signUp } from "@/api/auth";
export const loginUser = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      localStorage.setItem("authToken", result.token);
      return result;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

export const registerUser = createAsyncThunk(
  "signUp",
  async (data, { rejectWithValue }) => {
    try {
      const result = await signUp(data);
      localStorage.setItem("authToken", result.token);
      return result;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);
