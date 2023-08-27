import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPaymentsAction } from '../../pages/payment-options/paymentAction';
import { setModalShow } from '../../system/systemSlice';
import CustomModal from '../customModal/CustomModal';
import EditPaymentOptionForm from './EditPaymentOptionForm';

const PaymentOptionsTable = () => {
  const dispatch = useDispatch();
  const { paymentOptions } = useSelector((state) => state.paymentInfo);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState({});

  useEffect(() => {
    dispatch(getAllPaymentsAction());
  }, [dispatch]);

  const handleOnEdit = (obj) => {
    if (
      window.confirm('Are you sure you want to make an edit to the category?')
    ) {
      setSelectedPaymentOption(obj);
      dispatch(setModalShow(true));
    }
  };

  return (
    <Container>
      <CustomModal title="Edit Payment Option">
        <EditPaymentOptionForm paymentOption={selectedPaymentOption} />
      </CustomModal>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {paymentOptions.map(({ _id, status, title, description }, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td
                className={
                  status === 'active' ? 'text-success' : 'text-primary'
                }
              >
                {status}
              </td>
              <td>{title}</td>
              <td>{description}</td>
              <td>
                <Button
                  onClick={() =>
                    handleOnEdit({ _id, status, title, description })
                  }
                  variant="dark"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PaymentOptionsTable;
