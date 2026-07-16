import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCity: "Hyderabad",
};

const citySlice = createSlice({
  name: "city",

  initialState,

  reducers: {
    changeCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;

export default citySlice.reducer;
