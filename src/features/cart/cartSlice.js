import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total : 0
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    },

    remove: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
    cartValues : (state,action) => {
      return{
        ...state,
        total : action.payload
      }
    }
  },
});

export const { add, remove ,cartValues} = cartSlice.actions;
export default cartSlice.reducer;
