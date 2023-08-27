import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allAdmins: [],
};
const adminUsersSlice = createSlice({
  name: 'adminUsers',
  initialState,
  reducers: {
    setAllAdmins: (state, { payload }) => {
      if (state.allAdmins.length === 0 && payload.length === 0) {
        return;
      }
      state.allAdmins = payload;
    },
  },
});

const { reducer, actions } = adminUsersSlice;
export default reducer;
export const { setAllAdmins } = actions;
