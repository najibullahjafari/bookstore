// api.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iq87ZDBdLVe5avxJUeoP/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(baseURL, book);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${baseURL}/${bookId}`);
  return bookId;
});
