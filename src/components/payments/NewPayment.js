import React, { useState } from 'react';
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNewPaymentAction } from '../../pages/payment-options/paymentAction';

const NewPayment = () => {
  const initialState = {
    status: 'inactive',
    title: '',
    description: '',
  };
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;
    if (name === 'status') {
      value = checked ? 'active' : 'inactive';
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewPaymentAction(form));
    setForm(initialState);
  };
  return (
    <div className="mb-4">
      <Form
        onSubmit={handleOnSubmit}
        style={{ width: '800px', margin: 'auto' }}
        className="p-5 border-1 shadow-lg rounded-3"
      >
        <Row>
          <h3 className="text-center mb-3">Add New Payment Option</h3>
          <Col>
            {' '}
            <Form.Group className="p-1">
              <FormLabel>Status</FormLabel>
              <Form.Check
                type="switch"
                title="Status"
                name="status"
                value={form.status}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Group className="p-1">
              {' '}
              <Form.Control
                title="Payment Title"
                type="text"
                value={form.title}
                placeholder="Payment Title"
                onChange={handleOnChange}
                name="title"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="p-1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                title="Description"
                as="textarea"
                value={form.description}
                rows={4}
                placeholder="Description"
                onChange={handleOnChange}
                name="description"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="p-1 d-grid">
          {' '}
          <Button type="submit" variant="dark" className="mt-2">
            Add Payment Option
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewPayment;
