import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './pages/category/categorySlice';
import systemReducer from './system/systemSlice';
import adminReducer from './pages/signin-signup/adminSlice';
import paymentReducer from './pages/payment-options/paymentSlice';
import productReducer from './pages/products/productSlice';

export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    systemInfo: systemReducer,
    adminInfo: adminReducer,
    paymentInfo: paymentReducer,
    productInfo: productReducer,
  },
});
