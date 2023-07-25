import React from 'react';
import Layout from './Layout';
import { Container } from 'react-bootstrap';
import Sidebar from '../sidebar/Sidebar';

const AdminLayout = ({ children, title }) => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="main">
        <Layout>
          <Container>
            <div className="mt-3">
              <h3>{title}</h3>
            </div>
            <hr />
            <div className="page-content">{children} </div>
          </Container>
        </Layout>
      </main>
    </div>
  );
};

export default AdminLayout;
