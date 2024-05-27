import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState } from "./types";

const initialState: FormState = {
  values: {
    email: '',
    password: '',
    username: '',
    checkbox: false,
  },
  errors: {},
  registrationSent: false,
  registrationConfirmed: false,
  message: ''
};

const authSlice = createSlice({
  name: "FORM",
  initialState,
  reducers: {
    setFieldValue(state, action: PayloadAction<{ field: string; value: string }>) {
      state.values[action.payload.field] = action.payload.value;
    },
    setFieldError(state, action: PayloadAction<{ field: string; error: string }>) {
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
  },
});

export const {
  setFieldValue,
  setFieldError,
  setCheckboxValue,
  sendRegistration,
  confirmRegistration,
  setMessage
} = authSlice.actions;

export default authSlice.reducer;