import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signoutAdmin } from '../../helper/axios';
import { setAdmin } from '../../pages/signin-signup/adminSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.adminInfo);
  const handleOnLogout = () => {
    // log out from server by removing access and refresh JWTs
    signoutAdmin(admin._id);

    // clear storage
    localStorage.removeItem('refreshJWT');
    sessionStorage.removeItem('accessJWT');
    // reset store

    dispatch(setAdmin({}));
    navigate('/');
  };
  return (
    <div>
      <Navbar expand="md" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            E-Store Admin
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              {admin._id ? (
                <>
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>

                  <Link to="/" className="nav-link" onClick={handleOnLogout}>
                    Sign Out
                  </Link>
                </>
              ) : (
                <Link to="/" className="nav-link">
                  Sign In
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
