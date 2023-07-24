import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { postVerifyNewAdminInfo } from '../../helper/axios';
import { toast } from 'react-toastify';

const AdminVerification = () => {
  const navigate = useNavigate();
  const [queryStrings] = useSearchParams();
  console.log(queryStrings);
  const code = queryStrings.get('code');
  const email = queryStrings.get('email');
  console.log(code, email);

  const [showSpinner, setShowSpinner] = useState(true);
  const [response, setResponse] = useState({});

  //   const callAPI = useRef(true);

  //1. Call api to verify from the server
  //2. Based on response, display the response and redirect to login page.

  useEffect(() => {
    // callAPI &&
    postVerifyNewAdminInfo({ code, email }).then((response) => {
      setResponse(response);
      setShowSpinner(false);
      toast[response.status](response.message);
      if (response?.status === 'success') {
        navigate('/');
      }
    });
    // callAPI.current = false;
  }, [code, email, navigate]);

  return (
    <div>
      <Header />
      <main className="main mt-5">
        <Container>
          {showSpinner ? (
            <div className="mt-5 text-center">
              <Spinner animation="border" variant="" />
              <br />
              Please wait while account is being verified.
            </div>
          ) : (
            <Alert
              variant={response.status === 'success' ? 'success' : 'danger'}
            >
              {response.message}
            </Alert>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default AdminVerification;
