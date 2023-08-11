import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import {
  deletePaymentOptionAction,
  updatePaymentOptionAction,
} from '../../pages/payment-options/paymentAction';

const EditPaymentOptionForm = ({ paymentOption }) => {
  const initialState = {
    status: 'inactive',
    title: '',
    description: '',
  };
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    setForm(paymentOption);
  }, [paymentOption]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, title, status, description } = form;
    dispatch(updatePaymentOptionAction({ _id, title, status, description }));
  };

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;
    if (name === 'status') {
      value = checked ? 'active' : 'inactive';
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnDelete = () => {
    if (window.confirm('Are you sure you want to delete the payment option?')) {
      dispatch(deletePaymentOptionAction(paymentOption._id));
    }
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit} className="p-4 rounded">
        <Form.Group className="p-1">
          {' '}
          <Form.Check
            type="switch"
            title="Status"
            name="status"
            value={form.status}
            onChange={handleOnChange}
            checked={form.status === 'active'}
          />
        </Form.Group>

        <Form.Group className="p-1">
          {' '}
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            placeholder="Title"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="p-1">
          {' '}
          <Form.Control
            type="text"
            name="description"
            value={form.description}
            placeholder="Description"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="p-1">
          {' '}
          <Button type="submit" variant="dark">
            Edit Payment Option
          </Button>
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center">
        <Button type="submit" variant="danger" onClick={handleOnDelete}>
          Delete Payment Option
        </Button>
      </div>
    </>
  );
};

export default EditPaymentOptionForm;
