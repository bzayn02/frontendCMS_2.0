import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import {
  deleteCategoryAction,
  updateCategoryAction,
} from '../../pages/category/categoryAction';

const EditCatForm = ({ category }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  useEffect(() => {
    setForm(category);
  }, [category]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, title, status } = form;
    dispatch(updateCategoryAction({ _id, title, status }));
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
    if (window.confirm('Are you sure you want to delete the category?')) {
      dispatch(deleteCategoryAction(category._id));
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
            placeholder="Enter category"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="p-1">
          {' '}
          <Button type="submit" variant="dark">
            Edit Category
          </Button>
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center">
        <Button type="submit" variant="danger" onClick={handleOnDelete}>
          Delete Category
        </Button>
      </div>
    </>
  );
};

export default EditCatForm;
