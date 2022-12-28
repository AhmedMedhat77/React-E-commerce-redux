import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import testmonialsSlice from "./Slice/testmonialsSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    testmonial: testmonialsSlice,
  },
});

export { store };
