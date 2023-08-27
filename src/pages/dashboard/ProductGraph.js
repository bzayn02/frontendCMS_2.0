import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

const ProductGraph = ({ title }) => {
  const { products } = useSelector((state) => state.productInfo);
  return (
    <div className="m-5">
      <div className="fs-5">{title}</div>
      <BarChart
        width={600}
        height={400}
        data={products}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: '#FFFFFF' }} />
        <YAxis tick={{ fill: '#FFFFFF' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" fill="#8884d8" />
        <Bar dataKey="qty" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ProductGraph;
