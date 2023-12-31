import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import EditCatForm from './EditCategoryForm';
import CustomModal from '../customModal/CustomModal';
import { setModalShow } from '../../system/systemSlice';
import { getCategoriesAction } from '../../pages/category/categoryAction';

const CategoryTable = () => {
  const [displayList, setDisplayList] = useState([]);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoryInfo);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  useEffect(() => {
    setDisplayList(categories);
  }, [categories]);

  const handleOnEdit = (obj) => {
    if (
      window.confirm('Are you sure you want to make an edit to the category?')
    ) {
      setSelectedCategory(obj);
      dispatch(setModalShow(true));
    }
  };

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredCategories = categories.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayList(filteredCategories);
  };

  return (
    <>
      <CustomModal title="Edit Category">
        {' '}
        <EditCatForm category={selectedCategory} />
      </CustomModal>

      <div className="text-end d-flex justify-content-around my-4">
        <div className="">{displayList.length} Categories found!</div>
        <div>
          <Form.Control onChange={handleOnSearch} />
        </div>
      </div>
      <hr />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Added At</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {}
          {displayList.map(({ _id, title, slug, createdAt, status }, i) => (
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
              <td>{slug}</td>
              <td>{createdAt.slice(0, 10)}</td>
              <td>
                <Button
                  onClick={() =>
                    handleOnEdit({
                      _id,
                      title,
                      slug,
                      createdAt,
                      status,
                    })
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
    </>
  );
};

export default CategoryTable;
