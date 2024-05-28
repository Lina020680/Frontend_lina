import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PotsState, Pot } from "./types";

const potsInitialState: PotsState = {
  pots: [],
  isLoading: false,
  error: null,
};

const potsSlice = createSlice({
  name: 'POTS',
  initialState: potsInitialState,
  reducers: {
    activatePot(state, action: PayloadAction<string>) {
      const pot = state.pots.find((t: Pot) => t.id === action.payload);
      if (pot) {
        pot.active = true;
      }
    },
    deactivatePot(state, action: PayloadAction<string>) {
      const pot = state.pots.find((t: Pot) => t.id === action.payload);
      if (pot) {
        pot.active = false;
      }
    },
  },
});

export const { activatePot, deactivatePot } = potsSlice.actions;

export default potsSlice.reducer;