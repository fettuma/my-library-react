import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL =
  "https://openlibrary.org/people/mekBot/books/already-read.json";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async () => {
    const response = await axios.get(API_URL);

    return response.data.reading_log_entries.map((entry, index) => ({
      id: entry.work.key,
      titre: entry.work.title,
      auteur: entry.work.author_names,
      pages: 150 + index * 30, // fake but consistent
      status: "unread", // instead of "read"
      coverId: entry.work.cover_id || null,
    }));
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        ...action.payload,
        isManual: true,
        status: "unread", // default for manually added books
      });
    },
    updateBookStatus: (state, action) => {
      const { id, status } = action.payload;
      const book = state.books.find(b => b.id === id);
      if (book) {
        book.status = status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        // Keep manually added books
        const manualBooks = state.books.filter(book => book.isManual);
        state.books = [...action.payload, ...manualBooks];
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.error = "Erreur lors du chargement des livres";
      });
  },
});

export const { addBook, updateBookStatus } = booksSlice.actions;
export default booksSlice.reducer;