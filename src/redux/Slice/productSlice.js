import { createSlice } from "@reduxjs/toolkit";
import { mergeDeep } from "../../helpers/merge";

const initialState = {
  cart: {
    count: 0,
    product: [],
  },
  data: [],
};
const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    removeFromCart: function (oldState, action) {
      if (action.payload.count === 1) {
        return mergeDeep(oldState, {
          cart: {
            count: oldState.cart.count - 1,
            product: oldState.cart.product.filter(
              (v) => v.id !== action.payload.id
            ),
          },
        });
      }
      const selectedProduct = {
        ...action.payload,
        count: (action.payload.count ?? 0) - 1,
      };

      let index = -1;
      let cart_products = oldState.cart.product.filter((v, i) => {
        if (v.id !== selectedProduct.id) {
          return true;
        }
        index = i;
        return false;
      });

      if (index !== -1) {
        cart_products = [].concat(
          [...cart_products.slice(0, index), selectedProduct],
          cart_products.slice(index, cart_products.length)
        );
      } else {
        cart_products = [...cart_products, selectedProduct];
      }

      return mergeDeep(oldState, {
        cart: {
          count: oldState.cart.count - 1,
          product: cart_products,
        },
        data: oldState.data.map((v) =>
          v.id === selectedProduct.id ? { ...v, count: (v.count ?? 0) - 1 } : v
        ),
      });
    },
    addToCart: function (oldState, action) {
      const selectedProduct = action.payload;

      let index = -1;
      let cart_products = oldState.cart.product.filter((v, i) => {
        if (v.id !== selectedProduct.id) {
          return true;
        }
        index = i;
        return false;
      });

      if (index !== -1) {
        cart_products = [].concat(
          [
            ...cart_products.slice(0, index),
            { ...selectedProduct, count: (selectedProduct.count ?? 0) + 1 },
          ],
          cart_products.slice(index, cart_products.length)
        );
      } else {
        cart_products = [
          ...cart_products,
          { ...selectedProduct, count: (selectedProduct.count ?? 0) + 1 },
        ];
      }

      return mergeDeep(oldState, {
        cart: {
          count: oldState.cart.count + 1,
          product: cart_products,
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
