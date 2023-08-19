import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { getAllAdmins } from '../../helper/axios';

const AdminUsers = () => {
  const [admins, setAdmins] = useState([]);

  const allAdmins = async () => {
    const { adminUsers } = await getAllAdmins();
    adminUsers?.length && setAdmins(adminUsers);
  };

  useEffect(() => {
    allAdmins();
  }, []);
  console.log(admins);

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

      <div className="my-3">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td
                  className={
                    item?.status === 'active' ? 'text-success' : 'text-primary'
                  }
                >
                  {item?.status}
                </td>
                <td>{item?.fname + ' ' + item?.lname}</td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
                <td>{item?.address}</td>
                <td>
                  <Link to="/admin/update-profile">
                    <Button
                      disabled={item?.status === 'inactive'}
                      variant="dark"
                    >
                      Edit
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
