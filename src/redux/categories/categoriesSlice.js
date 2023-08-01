import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryStatus: (state) => {
      state.categories = 'under construction';
    },
  },
});

export const { getCategoryStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
