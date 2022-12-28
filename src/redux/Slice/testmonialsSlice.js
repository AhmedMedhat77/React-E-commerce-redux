import { createSlice } from "@reduxjs/toolkit";
import { mergeDeep } from "../../helpers/merge";

const initialState = {
  reviews: [],
};

const testmonialsSlice = createSlice({
  name: "testmonial",
  initialState,
  reducers: {
    set: function (oldState, action) {
      return mergeDeep(oldState, action.payload);
    },
  },
});

export const testmonialsAction = testmonialsSlice.actions;

export default testmonialsSlice.reducer;
