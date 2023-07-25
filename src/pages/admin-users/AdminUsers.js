import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const AdminUsers = () => {
  return (
    <AdminLayout title="Admin Users">
      <div className="text-end">
        <Button variant="dark">
          {' '}
          <Link to="/new-admin" className="nav-link">
            Add New Admin
          </Link>
        </Button>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
