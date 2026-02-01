import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    booksRead: 0,
    totalPages: 0,
  },
  reducers: {
    addReadBook: (state, action) => {
      state.booksRead += 1;
      state.totalPages += action.payload;
    },
  },
});

export const { addReadBook } = statsSlice.actions;
export default statsSlice.reducer;
