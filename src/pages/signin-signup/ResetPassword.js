import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Alert, Container } from 'react-bootstrap';
import PasswordOTPForm from '../../components/admin-signup/PasswordOTPForm';
import PasswordResetForm from '../../components/admin-signup/PasswordResetForm';
import { requestPassOTP, resetPassword } from '../../helper/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  // managing the state of OTP form and reset password form
  const [form, setForm] = useState('otpForm');

  const [email, setEmail] = useState('');
  const [response, setResponse] = useState({});

  const handleOnOTPRequest = async (email) => {
    setEmail(email);
    if (!email.includes('@') || !email.includes('.')) {
      return toast.error('Invalid Email');
    }
    const pending = requestPassOTP(email);
    toast.promise(pending, {
      pending: 'Please wait...',
    });
    const result = await pending;
    setResponse(result);
    setForm('resetPasswordForm');
  };

  const processResetPasswordAPI = async (obj) => {
    const pending = resetPassword({ ...obj, email });
    toast.promise(pending, {
      pending: 'Please wait...',
    });
    const { status, message } = await pending;
    toast[status](message);
    status === 'success' && navigate('/');
  };

  const forms = {
    otpForm: <PasswordOTPForm handleOnOTPRequest={handleOnOTPRequest} />,
    resetPasswordForm: (
      <PasswordResetForm
        setForm={setForm}
        processResetPasswordAPI={processResetPasswordAPI}
      />
    ),
  };

  return (
    <div>
      <Layout>
        <main className="main pt-5">
          <Container>
            <h3 className="text-center">Reset Password</h3>
            <div className="d-flex justify-content-center align-items-center">
              {' '}
              {response.message && (
                <Alert
                  variant={response.status === 'success' ? 'success' : 'danger'}
                  className="w-75 text-center"
                >
                  {response.message}
                </Alert>
              )}
            </div>

            <div className="d-flex reset-pass my-5"> {forms[form]}</div>
          </Container>
        </main>
      </Layout>
    </div>
  );
};

export default ResetPassword;
