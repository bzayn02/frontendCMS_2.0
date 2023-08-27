import React, { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import UpdateProfile from './UpdateProfile';
import UpdatePassword from './UpdatePassword';
import { Button } from 'react-bootstrap';

const Profile = () => {
  const [showForm, setShowForm] = useState('updateProfile');

  const forms = {
    updateProfile: <UpdateProfile />,
    updatePassword: <UpdatePassword />,
  };
  return (
    <AdminLayout title="Edit Profile">
      {' '}
      <div className="d-flex justify-content-center align-items-center my-3">
        {' '}
        <Button
          variant="dark"
          onClick={() => {
            setShowForm(
              showForm === 'updateProfile' ? 'updatePassword' : 'updateProfile'
            );
          }}
        >
          {showForm === 'updateProfile'
            ? 'Update your password here...'
            : 'Update your profile here...'}
        </Button>
      </div>
      <div>{forms[showForm]}</div>
    </AdminLayout>
  );
};

export default Profile;
