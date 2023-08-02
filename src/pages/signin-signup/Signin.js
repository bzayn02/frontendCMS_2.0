import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Button, Col, Form, Row } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { autoLoginAction, signInAdminAction } from './adminAction';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  email: '',
  password: '',
};

const Signin = () => {
  const location = useLocation();
  console.log(location);
  const { admin } = useSelector((state) => state.adminInfo);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pathTo = location.state?.from?.location?.pathname || '/dashboard';

  useEffect(() => {
    admin?._id && navigate(pathTo);
    dispatch(autoLoginAction());
  }, [admin, navigate, dispatch, pathTo]);

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
        <Row className="d-flex justify-content-evenly">
          {' '}
          <Col className=" d-flex justify-content-center align-items-center">
            <h1>E-Store Admin Login</h1>
          </Col>
          <Col className="">
            {' '}
            <Form
              onSubmit={handleOnSubmit}
              className="border shadow-lg p-3"
              style={{ width: '450px', borderRadius: '30px' }}
            >
              <h1 className="text-center">Welcome Back</h1>
              <hr />
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
          </Col>
        </Row>
      </main>
    </Layout>
  );
};

export default Signin;
