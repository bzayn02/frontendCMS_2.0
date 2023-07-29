import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/signin-signup/Signin';
import Signup from './pages/signin-signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminVerification from './pages/signin-signup/AdminVerification';
import Dashboard from './pages/dashboard/Dashboard';
import Category from './pages/category/Category';
import Products from './pages/products/Products';
import PaymentOptions from './pages/payment-options/Payment-options';
import Orders from './pages/orders/Orders';
import Customers from './pages/customers/Customers';
import AdminUsers from './pages/admin-users/AdminUsers';
import Profile from './pages/profile/Profile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesAction } from './pages/category/categoryAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="admin-verification" element={<AdminVerification />} />

        {/* Private Route */}
        <Route path="new-admin" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category" element={<Category />} />
        <Route path="products" element={<Products />} />
        <Route path="payment-options" element={<PaymentOptions />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="admin-users" element={<AdminUsers />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
