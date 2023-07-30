import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './pages/category/categorySlice';
import systemReducer from './system/systemSlice';
import adminReducer from './pages/signin-signup/adminSlice';

export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    systemInfo: systemReducer,
    adminInfo: adminReducer,
  },
});
