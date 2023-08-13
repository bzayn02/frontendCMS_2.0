import React, { useEffect } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  // deleteProductAction,
  getProductsAction,
} from '../../pages/products/productAction';
import { Link } from 'react-router-dom';

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);
  return (
    <div>
      <div className="mt-5">
        <div className="d-flex justify-content-between mb-3">
          <div className="">{products.length} Products found</div>
          <div className="">
            <Form.Control type="text" placeholder="Search by Product Name..." />
          </div>
        </div>
        <Table striped bordered hover className="text-start">
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Status</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={
                      process.env.REACT_APP_ROOTSERVER +
                      item.thumbnail?.slice(6)
                    }
                    alt="img"
                    width="150px"
                  />
                </td>
                <td>{item.status}</td>
                <td>
                  <h3>{item.name}</h3>
                  Price:{item.price}
                </td>
                <td>{item.qty}</td>
                <td>
                  <Link to={`/product/edit/${item._id}`}>
                    <Button variant="dark">Edit</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProductTable;
