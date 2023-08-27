import React, { useEffect } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdminsAction } from './allAdminAction';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { allAdmins } = useSelector((state) => state.allAdminsInfo);

  useEffect(() => {
    dispatch(getAllAdminsAction());
  }, [dispatch]);

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
        <Table striped bordered hover variant="dark">
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
            {allAdmins.map((item, i) => (
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
                  <Link
                    to={
                      item?.status === 'inactive'
                        ? '#'
                        : '/admin/update-profile'
                    }
                  >
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
