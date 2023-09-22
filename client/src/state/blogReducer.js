// blogReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlogEntry: (state, action) => {
      state.entries = [...state.entries, action.payload];
    },
  },
});

export const { addBlogEntry } = blogSlice.actions;
export default blogSlice.reducer;
