import { createSlice } from "@reduxjs/toolkit";
import { mergeDeep } from "../../helpers/merge";

const initialState = {
  cart: {
    count: 0,
  },
  data: [],
};
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: function (oldState, action) {
      const selectedProduct = action.payload;
      return mergeDeep(oldState, {
        cart: {
          count: oldState.cart.count + 1,
        },
        data: oldState.data.map((v) =>
          v.id === selectedProduct.id ? { ...v, count: (v.count ?? 0) + 1 } : v
        ),
      });
    },
    set: function (oldState, action) {
      return mergeDeep(oldState, action.payload);
    },
  },
});

export const productAction = productsSlice.actions;

export default productsSlice.reducer;
