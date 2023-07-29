import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import NewCatForm from '../../components/category/NewCatForm';
import CategoryTable from '../../components/category/CategoryTable';

const Category = () => {
  return (
    <AdminLayout title="Category">
      <NewCatForm />
      <CategoryTable />
    </AdminLayout>
  );
};

export default Category;
