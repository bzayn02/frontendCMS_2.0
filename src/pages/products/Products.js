import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Button } from 'react-bootstrap';
import ProductTable from '../../components/product/ProductTable';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <AdminLayout title="Products">
      <div className="text-end">
        <Link to="/new-product">
          {' '}
          <Button variant="dark">+ Add New Product</Button>
        </Link>

        <ProductTable />
      </div>
    </AdminLayout>
  );
};

export default Products;
