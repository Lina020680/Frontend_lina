import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LeafGrowState, Pot } from "./types";

const leafGrowInitialState: LeafGrowState = {
  pots: [],
  isLoading: false,
  error: null,
  isUserLoggedIn: false, 
};

const potsSlice = createSlice({
  name: 'LEAFGROW',
  initialState: leafGrowInitialState,
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