import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import { Link } from 'react-router-dom';
import { signInAdminAction } from './adminAction';

const initialState = {
  email: '',
  password: '',
};

const Signin = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    signInAdminAction(form);
  };
  return (
    <Layout>
      <main className="main pt-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border shadow-lg p-3"
          style={{ width: '450px', margin: 'auto' }}
        >
          <h1>Welcome Back</h1>
          <CustomInput
            label="Email"
            name="email"
            type="email"
            required
            onChange={handleOnChange}
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            onChange={handleOnChange}
            required
          />
          <div className="d-grid p-5">
            <Button type="submit" variant="dark">
              Sign In
            </Button>
          </div>
          <p className="mt-2 text-end">
            Forgot Password?{' '}
            <Link to="reset-pass-otp" className="nav-link">
              Click here
            </Link>
          </p>
        </Form>
      </main>
    </Layout>
  );
};

export default Signin;
