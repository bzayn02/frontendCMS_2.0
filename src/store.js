import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './pages/category/categorySlice';
import systemReducer from './system/systemSlice';

export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    systemInfo: systemReducer,
  },
});
