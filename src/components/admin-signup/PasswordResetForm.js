import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../customInput/CustomInput';

const PasswordResetForm = ({ setForm, processResetPasswordAPI }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setError('');
    if (name === 'confirmPassword') {
      value !== formData.password
        ? setError('Password should match!')
        : setError('');
    }

    if (name === 'password') {
      value.length < 8 && setError('At least 8 characters is required.');
      !/[0-9]/.test(value) && setError('At least one number is required.');
      !/[A-Z]/.test(value) && setError('At least one upper case is required.');
      !/[a-z]/.test(value) && setError('At least one lower case is required.');
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formData;

    if (confirmPassword !== rest.password) {
      return setError('Password should match!');
    }

    // call api
    processResetPasswordAPI(rest);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h3>Request OTP</h3>
      <hr />
      <CustomInput
        required
        type="number"
        onChange={handleOnChange}
        name="otp"
        label="OTP"
        placeholder="123456"
      />
      <CustomInput
        required
        type="password"
        onChange={handleOnChange}
        label="Password"
        name="password"
        placeholder="********"
      />
      <CustomInput
        required
        type="password"
        onChange={handleOnChange}
        label="Confirm Password"
        name="confirmPassword"
        placeholder="********"
      />
      <div className="py-3 text-danger fw-bold d-inline-block">{error}</div>
      <div className="d-grid mt-3">
        <Button variant="dark" type="submit" disabled={error}>
          Reset Password
        </Button>
      </div>

      <div className="text-end my-3">
        Didn't receive OTP?
        <a onClick={() => setForm('otpForm')} href="#!">
          {' '}
          Request again.
        </a>
      </div>
    </Form>
  );
};

export default PasswordResetForm;
