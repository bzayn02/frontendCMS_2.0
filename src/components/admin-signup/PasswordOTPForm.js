import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../customInput/CustomInput';

const PasswordOTPForm = ({ handleOnOTPRequest }) => {
  const emailRef = useRef('');

  const handleOnRequestOTP = () => {
    const { value } = emailRef.current;
    console.log(value);
    if (value) {
      handleOnOTPRequest(value);
    }
  };
  return (
    <Form>
      <h3>Request OTP</h3>
      <hr />
      <CustomInput
        someRef={emailRef}
        label="Email"
        placeholder="sam@email.com"
      />
      <div className="d-grid mt-3">
        <Button variant="dark" onClick={handleOnRequestOTP}>
          Request OTP
        </Button>
      </div>
    </Form>
  );
};

export default PasswordOTPForm;
