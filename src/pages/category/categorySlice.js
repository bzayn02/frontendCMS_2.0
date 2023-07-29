import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      if (state.categories.length === 0 && payload.length === 0) {
        return;
      }
      state.categories = payload;
    },
  },
});

const { reducer, actions } = categorySlice;
export default reducer;
export const { setCategories } = actions;
