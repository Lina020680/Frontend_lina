import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PotsState, Pot } from "./types";

const potsInitialState: PotsState = {
  pots: [],
  isLoading: false,
  error: null,
  isUserLoggedIn: false, 
};

const potsSlice = createSlice({
  name: 'POTS',
  initialState: potsInitialState,
  reducers: {
    activatePot(state, action: PayloadAction<string>) {
      const pot = state.pots.find(t => t.id === action.payload);
      if (pot) {
        pot.active = true;
      }
    },
    deactivatePot(state, action: PayloadAction<string>) {
      const pot = state.pots.find(t => t.id === action.payload);
      if (pot) {
        pot.active = false;
      }
    },
    logIn(state) {
      state.isUserLoggedIn = true;
    },
    logOut(state) {
      state.isUserLoggedIn = false;
    },
  },
});

export const { activatePot, deactivatePot, logIn, logOut } = potsSlice.actions;

export default potsSlice.reducer;