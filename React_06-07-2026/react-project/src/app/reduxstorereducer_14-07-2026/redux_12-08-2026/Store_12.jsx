import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../../../features/counterslice_12-08-2026/CounterSlice_12";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
