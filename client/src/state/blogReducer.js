// blogReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: [],
  count: 0,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlogEntry: (state, action) => {
      state.entries = [...state.entries, ...action.payload];
    },
    updateCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { addBlogEntry, updateCount } = blogSlice.actions;
export default blogSlice.reducer;
