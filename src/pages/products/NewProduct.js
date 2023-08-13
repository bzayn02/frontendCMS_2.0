import React, { useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import { useDispatch } from 'react-redux';
import { postNewProductAction } from './productAction';
import { Link } from 'react-router-dom';
import SelectCategory from '../../components/category/SelectCategory';
const initialState = {
  status: 'inactive',
};
const NewProduct = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialState);
  const [imgs, setImgs] = useState([]);

  const inputs = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Samsung TV',
      required: true,
    },
    {
      name: 'sku',
      label: 'SKU',
      type: 'text',
      placeholder: 'SAM-TV-8',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      as: 'textarea',
      placeholder: 'Product Description ...',
      rows: '6',
      required: true,
    },
    {
      name: 'qty',
      label: 'QTY',
      type: 'number',
      placeholder: '50',
      required: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      placeholder: '1000',
      required: true,
    },
    {
      name: 'salesPrice',
      label: 'Sales Price',
      type: 'number',
      placeholder: '800',
    },
    {
      name: 'salesStartDate',
      label: 'Sales Start Date',
      type: 'Date',
    },
    {
      name: 'salesEndDate',
      label: 'Sales End Date',
      type: 'Date',
    },
  ];

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === 'status') {
      value = checked ? 'active' : 'inactive';
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnImageAttached = (e) => {
    const { files } = e.target;
    setImgs(files);
  };

  const handleOnSumit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // set all form data in FormData
    for (let key in form) {
      formData.append(key, form[key]);
    }
    // check if there any new image is being added
    if (imgs.length) {
      [...imgs].forEach((item) => {
        formData.append('images', item);
      });
    }
    // append all the form data and image together
    dispatch(postNewProductAction(formData));
  };

  return (
    <div>
      <AdminLayout title="New Product">
        <Link to="/products">
          <Button variant="dark">&lt; Back</Button>
        </Link>
        <div className="mt-3">
          <Form onSubmit={handleOnSumit}>
            <Form.Group className="mb-3">
              <Form.Check
                name="status"
                type="switch"
                label="Status"
                onChange={handleOnChange}
              />
            </Form.Group>

            <SelectCategory
              onChange={handleOnChange}
              name="parentCat"
              required={true}
            />
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            <Form.Group className="mb-3 mt-3">
              <Form.Control
                type="file"
                name="img"
                multiple
                onChange={handleOnImageAttached}
                required
              />
            </Form.Group>
            <div className="d-grid my-3">
              <Button variant="dark" type="submit">
                Add Product
              </Button>
            </div>
          </Form>
        </div>
      </AdminLayout>
    </div>
  );
};

export default NewProduct;
