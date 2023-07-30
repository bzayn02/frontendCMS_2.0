import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: {},
};
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, { payload }) => {
      state.admin = payload;
    },
  },
});

const { reducer, actions } = adminSlice;
export default reducer;
export const { setAdmin } = actions;
