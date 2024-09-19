import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coins/coinSlice";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
      auth: authReducer,
      Coins: coinReducer,
      cart: cartReducer,
  },
});

export default store;
