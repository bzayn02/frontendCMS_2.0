import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TotalAdmins = ({ title }) => {
  const { allAdmins } = useSelector((state) => state.allAdminsInfo);
  return (
    <div className="m-5">
      <div className="fs-5 my-2">{title}</div>
      <Table striped bordered hover variant="dark" style={{ width: '250px' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {allAdmins.map((admin, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{admin.status}</td>
              <td>
                {admin.fname} {admin.lname}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TotalAdmins;
