import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import UpdateProfile from './UpdateProfile';

const Profile = () => {
  return (
    <AdminLayout title="Edit Profile">
      <UpdateProfile />
    </AdminLayout>
  );
};

export default Profile;
