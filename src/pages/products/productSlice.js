import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      if (state.products.length === 0 && payload.length === 0) {
        return;
      }
      state.products = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export default reducer;
export const { setProducts } = actions;
