import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../../features/cart_19-08-2026/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
