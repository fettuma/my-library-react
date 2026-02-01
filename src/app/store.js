import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";
import statsReducer from "../features/stats/statsSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    stats: statsReducer,
  },
});
