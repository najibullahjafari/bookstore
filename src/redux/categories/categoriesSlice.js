import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryStatus: () => ({ categories: 'Under Construction' }),
  },
});

export const { getCategoryStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
