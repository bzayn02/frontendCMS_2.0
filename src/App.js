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
import PrivateRoute from './components/private/PrivateRoute';

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

        <Route
          path="new-admin"
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="payment-options"
          element={
            <PrivateRoute>
              <PaymentOptions />
            </PrivateRoute>
          }
        />
        <Route
          path="orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="customers"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        />
        <Route
          path="admin-users"
          element={
            <PrivateRoute>
              <AdminUsers />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
