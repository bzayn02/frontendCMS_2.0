import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { signInAdminAction } from './adminAction';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  email: '',
  password: '',
};

const Signin = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    admin?._id && navigate('/dashboard');
  }, [admin, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(signInAdminAction(form));
  };
  return (
    <Layout>
      <main className="main pt-5 my-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border shadow-lg p-3"
          style={{ width: '450px', margin: 'auto' }}
        >
          <h1 className="text-center">Welcome Back</h1>
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
            Forgot Password? Click{' '}
            <Link to="reset-pass-otp" className="">
              here
            </Link>{' '}
            to reset.
          </p>
        </Form>
      </main>
    </Layout>
  );
};

export default Signin;
