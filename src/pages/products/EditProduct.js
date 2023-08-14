import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Button, Form } from 'react-bootstrap';
import CustomInput from '../../components/customInput/CustomInput';
import { useDispatch } from 'react-redux';
import { deleteProductAction, updateProductAction } from './productAction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SelectCategory from '../../components/category/SelectCategory';
import { getProducts } from '../../helper/axios';

const initialState = {
  status: 'inactive',
};

const EditProduct = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialState);
  const [imgs, setImgs] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);

  const getSelectedProduct = async () => {
    const { products } = await getProducts(_id);
    products?._id && setForm(products);
  };

  useEffect(() => {
    // Immediately invoked function
    // (async () => {
    //   const { products } = await getProducts(_id);
    //   products?._id && setForm(products);
    // })();
    getSelectedProduct();
  }, []);

  const handleOnDelete = async () => {
    if (window.confirm('Are you sure you want to delete the product?')) {
      const isDeleted = await dispatch(deleteProductAction(_id));
      isDeleted && navigate('/products');
    }
  };
  const handleOnDeleteSelectedImage = (e) => {
    const { value, checked } = e.target;
    if (value === form.thumbnail) {
      return alert(
        "You can't delete the thumbnail, please select another image as thumbnail."
      );
    }
    checked
      ? setImgToDelete([...imgToDelete, value])
      : setImgToDelete(imgToDelete.filter((url) => url !== value));
  };

  const inputs = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Samsung TV',
      required: true,
      value: form.name,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      value: form.slug,
      disabled: true,
    },
    {
      name: 'sku',
      value: form.sku,
      label: 'SKU',
      type: 'text',
      placeholder: 'SAM-TV-8',
      disabled: true,
    },
    {
      name: 'description',
      label: 'Description',
      value: form.description,
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
      value: form.qty,
      placeholder: '50',
      required: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      value: form.price,

      placeholder: '1000',
      required: true,
    },
    {
      name: 'salesPrice',
      label: 'Sales Price',
      value: form.salesPrice,
      type: 'number',
      placeholder: '800',
    },
    {
      name: 'salesStartDate',
      value: form?.salesStartDate?.slice(0, 10),
      label: 'Sales Start Date',
      type: 'Date',
    },
    {
      name: 'salesEndDate',
      value: form?.salesEndDate?.slice(0, 10),
      label: 'Sales End Date',
      type: 'Date',
    },
  ];

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === 'thumbnail' && imgToDelete.includes(value)) {
      return alert("Deleting image can't be set as thumbnail.");
    }

    if (name === 'status') {
      value = checked ? 'active' : 'inactive';
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnImageAttached = (e) => {
    const { files } = e.target;
    setImgs(files);
  };

  const handleOnSumit = async (e) => {
    e.preventDefault();
    if (!window.confirm('Are you sure you want to update the product?')) {
      return;
    }

    const formData = new FormData();
    let { sku, slug, __v, createdAt, updatedAt, ...rest } = form;
    //remove all the url from rest.images which matches the urls in the imgToDelete

    rest.images = rest.images.filter((url) => !imgToDelete.includes(url));

    // set all rest data in FormData
    for (let key in rest) {
      formData.append(key, rest[key]);
    }

    // check if there any new image is being added
    if (imgs.length) {
      [...imgs].forEach((item) => {
        formData.append('images', item);
      });
    }

    const isUpdated = await dispatch(updateProductAction(formData));
    isUpdated && getSelectedProduct();

    setImgToDelete([]);
  };

  return (
    <div>
      <AdminLayout title="Edit Product">
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
                checked={form.status === 'active'}
              />
            </Form.Group>

            <SelectCategory
              onChange={handleOnChange}
              name="parentCat"
              required={true}
              _id={form.parentCat}
            />
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}
            <div className="py-3 d-flex">
              {form.images?.map((url) => (
                <div>
                  <div>
                    <input
                      type="radio"
                      name="thumbnail"
                      checked={url === form.thumbnail}
                      value={url}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="">Thumbnail</label>
                  </div>
                  <img
                    className="img-thumbnail m-3"
                    key={url}
                    src={process.env.REACT_APP_ROOTSERVER + url?.slice(6)}
                    alt=""
                    width="150px"
                  />
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Delete"
                      value={url}
                      onChange={handleOnDeleteSelectedImage}
                      checked={imgToDelete.includes(url)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Form.Group className="mb-3 mt-3">
              <Form.Control
                type="file"
                name="img"
                multiple
                onChange={handleOnImageAttached}
              />
            </Form.Group>
            <div className="d-grid my-3">
              <Button variant="dark" type="submit">
                Update Product
              </Button>
            </div>
          </Form>
          <div className="d-grid my-3">
            <Button variant="danger" type="submit" onClick={handleOnDelete}>
              Delete Product
            </Button>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default EditProduct;
