import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getAdminProfileAction,
  updateAdminAction,
} from '../signin-signup/adminAction';

const inputs = [
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
  {
    label: 'Current Password',
    name: 'currentPassword',
    type: 'password',
    placeholder: 'Current Password',
  },
];

const UpdatePassword = () => {
  const initialState = {
    password: '',
    confirmPassword: '',
    currentPassword: '',
  };
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
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

    // dispatch(getAdminProfileAction());
    setForm(initialState);
  };
  return (
    <div>
      <Form
        onSubmit={handleOnEdit}
        style={{ width: '600px' }}
        className="m-auto border p-4 shadow-lg my-2 rounded-4"
      >
        <h3 className="text-center">Update Password</h3>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid mt-5">
          <div className=" text-danger fw-bold d-inline-block">{error}</div>
          <Button variant="dark" type="submit">
            Update Password
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdatePassword;
