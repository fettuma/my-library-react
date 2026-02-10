import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";
import statsReducer from "../features/stats/statsSlice";
import userReducer  from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    stats: statsReducer,
    user: userReducer ,
  },
});
