import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { useSelector } from 'react-redux';
import CategoryPie from './CategoryPie';
import TotalAdmins from './TotalAdmins';

const Dashboard = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  const { paymentOptions } = useSelector((state) => state.paymentInfo);
  const { products } = useSelector((state) => state.productInfo);

  return (
    <AdminLayout title="Dashboard">
      <div className="fs-2 fst-italic fw-bolder text-center">
        Welcome {admin.fname.toUpperCase()}!
      </div>
      <hr />
      <CategoryPie title="Categories" />
      <TotalAdmins title="Admins" />
    </AdminLayout>
  );
};

export default Dashboard;
