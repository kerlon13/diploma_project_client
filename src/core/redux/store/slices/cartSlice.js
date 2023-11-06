import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    resetCart:  (state) => {
      state.length = 0;
    },
    removeFromCart: (state, action) => {
        const id = action.payload; 
        const index = state.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.splice(index, 1);
        }
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity; 
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
