import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import AdminLayout from '../../components/layout/AdminLayout';
import { createNewAdminAction } from './adminAction';

const Signup = () => {
  const inputs = [
    {
      label: 'First Name',
      name: 'fname',
      required: true,
      type: 'text',
      placeholder: 'First Name',
    },

    {
      label: 'Last Name',
      name: 'lname',
      required: true,
      type: 'text',
      placeholder: 'Last Name',
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'text',
      placeholder: 'Phone',
    },
    {
      label: 'Address',
      name: 'address',
      type: 'text',
      placeholder: 'Address',
    },
    // {
    //   label: 'Date of Birth',
    //   name: 'dob',
    //   type: 'date',
    //   placeholder: 'Date of Birth',
    // },
    {
      label: 'Email',
      name: 'email',
      required: true,
      type: 'text',
      placeholder: 'Email',
    },
    {
      label: 'Password',
      name: 'password',
      required: true,
      type: 'password',
      placeholder: 'Password',
      minLength: '8',
    },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      required: true,
      type: 'password',
      placeholder: 'Confirm Password',
    },
  ];

  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error('Password should match.');
    }
    console.log(form);

    createNewAdminAction(rest);
  };

  return (
    <AdminLayout>
      <div className="p-3">
        <Form
          onSubmit={handleOnSubmit}
          style={{ width: '450px' }}
          className="m-auto border p-4 shadow-lg mt-2 rounded-4"
        >
          <h3 className="text-center">Add New Admin</h3>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid mt-5">
            <Button variant="dark" type="submit">
              Add New Admin
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default Signup;
