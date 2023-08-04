import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MCEOPrFCxSkuv85Y9JYV/books';

export const apiData = createAsyncThunk('books/apiData', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error');
  }
});

export const apiPost = createAsyncThunk('books/apiPost', async (newBook) => {
  try {
    const response = await axios.post(apiUrl, newBook);
    return response.data === 'Created' ? newBook : null;
  } catch (error) {
    throw new Error('Error');
  }
});

export const apiErase = createAsyncThunk('books/apiErase', async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data === 'The book was deleted successfully!' ? id : null;
  } catch (error) {
    throw new Error('Error');
  }
});

export const apiUpdateProgress = createAsyncThunk(
  'books/apiUpdateProgress',
  async ({ id, progress }) => {
    try {
      const response = await axios.patch(`${apiUrl}/${id}`, { progress });
      return response.data === 'Updated' ? { id, progress } : null;
    } catch (error) {
      throw new Error('Error');
    }
  },
);

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(apiData.pending, (state) => {
        state.status = 'loading...';
      })
      .addCase(apiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload === '' || action.payload === undefined) return;
        const booksFormatted = Object.keys(action.payload).map((key) => ({
          item_id: key,
          title: action.payload[key][0].title,
          author: action.payload[key][0].author,
          category: action.payload[key][0].category,
        }));
        state.books = booksFormatted;
      })
      .addCase(apiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(apiPost.pending, (state) => {
        state.status = 'loading...';
      })
      .addCase(apiPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== null) state.books.push(action.payload);
      })
      .addCase(apiErase.pending, (state) => {
        state.status = 'loading...';
      })
      .addCase(apiErase.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== null) {
          state.books = state.books.filter(
            (book) => book.item_id !== action.payload,
          );
        }
      })
      .addCase(apiUpdateProgress.pending, (state) => {
        state.status = 'loading...';
      })
      .addCase(apiUpdateProgress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== null) {
          const { id, progress } = action.payload;
          state.books = state.books.map((book) => {
            if (book.item_id === id) {
              return { ...book, progress };
            }
            return book;
          });
        }
      })
      .addCase(apiUpdateProgress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
