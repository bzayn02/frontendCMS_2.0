import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { addNewCategoryAction } from '../../pages/category/categoryAction';

const NewCatForm = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();

  const handleOnAddCategory = () => {
    // console.log(nameRef.current.value);
    const { value } = nameRef.current;
    value && dispatch(addNewCategoryAction({ title: value }));
  };

  return (
    <div className="p-4 rounded">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter category"
            ref={nameRef}
          />
        </Col>
        <Col>
          <Button onClick={handleOnAddCategory} variant="dark">
            Add New Category
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default NewCatForm;
