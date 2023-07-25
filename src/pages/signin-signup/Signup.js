import React from 'react';

import AdminSignup from '../../components/admin-signup/AdminSignup';
import AdminLayout from '../../components/layout/AdminLayout';

const Signup = () => {
  return (
    <AdminLayout title="Add New Admin">
      <AdminSignup />
    </AdminLayout>
  );
};

export default Signup;
