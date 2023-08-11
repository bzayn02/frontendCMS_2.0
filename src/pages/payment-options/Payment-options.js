import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import NewPayment from '../../components/payments/NewPayment';
import PaymentOptionsTable from '../../components/payments/PaymentOptionsTable';

const PaymentOptions = () => {
  return (
    <AdminLayout title="Payment-Options">
      <NewPayment />
      <PaymentOptionsTable />
    </AdminLayout>
  );
};

export default PaymentOptions;
