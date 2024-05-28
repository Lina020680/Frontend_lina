import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  values: {
    email: "",
    password: "",
    username: "",
    checkbox: false,
  },
  errors: {},
  registrationSent: false,
  registrationConfirmed: false,
  message: "",
  isUserLoggedIn: false, 
};

const authSlice = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    setStringFieldValue(
      state,
      action: PayloadAction<{
        field: "email" | "password" | "username";
        value: string;
      }>,
    ) {
      state.values[action.payload.field] = action.payload.value;
    },
    setBooleanFieldValue(
      state,
      action: PayloadAction<{ field: "checkbox"; value: boolean }>,
    ) {
      state.values[action.payload.field] = action.payload.value;
    },
    setFieldError(
      state,
      action: PayloadAction<{
        field: keyof AuthState["errors"];
        error: string;
      }>,
    ) {
      state.errors[action.payload.field] = action.payload.error;
    },
    setCheckboxValue(state, action: PayloadAction<boolean>) {
      state.values.checkbox = action.payload;
    },
    sendRegistration(state) {
      state.registrationSent = true;
    },
    confirmRegistration(state) {
      state.registrationConfirmed = true;
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    logIn(state) {
      state.isUserLoggedIn = true;
    },
    logOut(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export const {
  setStringFieldValue,
  setBooleanFieldValue,
  setFieldError,
  setCheckboxValue,
  sendRegistration,
  confirmRegistration,
  setMessage,
  logIn,
  logOut,
} = authSlice.actions;

export default authSlice.reducer;