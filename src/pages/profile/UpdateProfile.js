import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import {
  getAdminProfileAction,
  updateAdminAction,
} from '../../pages/signin-signup/adminAction';
import { useDispatch, useSelector } from 'react-redux';

const UpdateProfile = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  const {
    _id,
    status,
    isVerified,
    verificationCode,
    createdAt,
    updatedAt,
    __v,
    ...rest
  } = admin;
  const [form, setForm] = useState({});
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setForm(rest);
  }, []);

  let inputs = [
    {
      label: 'First Name',
      name: 'fname',
      type: 'text',
      value: form.fname,
    },

    {
      label: 'Last Name',
      name: 'lname',
      type: 'text',
      value: form.lname,
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'text',
      value: form.phone,
    },
    {
      label: 'Address',
      name: 'address',
      type: 'text',
      value: form.address,
    },

    {
      label: 'Email',
      name: 'email',
      type: 'text',
      value: form.email,
      disabled: true,
    },

    {
      label: 'Your Current Password',
      name: 'currentPassword',
      type: 'password',
      placeholder: 'Current Password',
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    setError('');
    let { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnEdit = (e) => {
    e.preventDefault();
    dispatch(updateAdminAction(form));
    dispatch(getAdminProfileAction());
  };
  console.log(form, 'from update profile form');

  return (
    <div>
      <Form
        onSubmit={handleOnEdit}
        style={{ width: '600px' }}
        className="m-auto border p-4 shadow-lg my-2 rounded-4"
      >
        <h3 className="text-center">Edit Profile</h3>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid mt-5">
          <div className=" text-danger fw-bold d-inline-block">{error}</div>

          <Button
            variant="dark"
            type="submit"
            disabled={
              form.fname === admin.fname &&
              form.lname === admin.lname &&
              form.address === admin.address &&
              form.phone === admin.phone
            }
          >
            Update Profile
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfile;
