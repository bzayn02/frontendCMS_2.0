import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { useSelector } from 'react-redux';
import CategoryPie from './CategoryPie';
import TotalAdmins from './TotalAdmins';
import ProductGraph from './ProductGraph';
import PaymentCard from './PaymentCard';

const Dashboard = () => {
  const { admin } = useSelector((state) => state.adminInfo);

  return (
    <AdminLayout title="Dashboard">
      <div className="fs-2 fst-italic fw-bolder text-center">
        Welcome {admin.fname.toUpperCase()}!
      </div>
      <hr />
      <div className="d-flex flex-wrap justify-content-around">
        <CategoryPie title="Categories" />
        <TotalAdmins title="Admins" />
        <ProductGraph title="Products" />
        <PaymentCard title="Payment Options Available" />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
