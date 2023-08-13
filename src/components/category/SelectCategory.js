import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SelectCategory = (props) => {
  const { categories } = useSelector((state) => state.categoryInfo);
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Select {...props}>
          <option> -- select one --</option>
          {categories.map(({ _id, title }) => (
            <option key={_id} value={_id} selected={_id === props._id}>
              {' '}
              {title}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default SelectCategory;
