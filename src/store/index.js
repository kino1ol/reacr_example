import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../actions/reducer/auth";
import cartSlice from "../actions/reducer/cart";

export default configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
  },
});
