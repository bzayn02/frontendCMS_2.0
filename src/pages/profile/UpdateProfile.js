import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import {
  getAdminProfileAction,
  updateAdminAction,
} from '../../pages/signin-signup/adminAction';
import { useDispatch, useSelector } from 'react-redux';

const UpdateProfile = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  const [form, setForm] = useState({});
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setForm(admin);
  }, [admin]);

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
      label: 'New Password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      minLength: '8',
    },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
    },
  ];

  const handleOnChange = (e) => {
    setForm(admin);
    setError('');
    let { name, value } = e.target;

    if (name === 'confirmPassword') {
      value !== form.password
        ? setError('Password should match!')
        : setError('');
    }

    if (name === 'password') {
      value.length < 8 && setError('At least 8 characters is required.');
      !/[0-9]/.test(value) && setError('At least one number is required.');
      !/[A-Z]/.test(value) && setError('At least one upper case is required.');
      !/[a-z]/.test(value) && setError('At least one lower case is required.');
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnEdit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error('Password should match.');
    }

    dispatch(updateAdminAction(rest));
    dispatch(getAdminProfileAction());
  };
  console.log(form);

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
              form.phone === admin.phone &&
              form.password === undefined
            }
          >
            Edit Admin
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfile;
