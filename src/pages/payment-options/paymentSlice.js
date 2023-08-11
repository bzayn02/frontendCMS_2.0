import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentOptions: [],
};
const paymentSlice = createSlice({
  name: 'payment-options',
  initialState,
  reducers: {
    setPaymentOptions: (state, { payload }) => {
      if (state.paymentOptions.length === 0 && payload.length === 0) {
        return;
      }
      state.paymentOptions = payload;
    },
  },
});

const { reducer, actions } = paymentSlice;
export default reducer;
export const { setPaymentOptions } = actions;
