import React from 'react';
import { useSelector } from 'react-redux';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import { Tooltip } from 'react-bootstrap';

const CategoryPie = ({ title }) => {
  const { categories } = useSelector((state) => state.categoryInfo);
  const COLORS = [
    '#FFFFFF', // White
    '#FF5733', // Dark Orange
    '#2ECC71', // Emerald Green
    '#3498DB', // Bright Blue
    '#9B59B6', // Amethyst Purple
    '#E74C3C', // Red
    '#1ABC9C', // Dark Cyan
    '#F39C12', // Yellow
    '#27AE60', // Dark Green
    '#2980B9',
  ];
  const categoryCounts = categories.reduce((acc, category) => {
    const categoryName = category.title;
    acc[categoryName] = (acc[categoryName] || 0) + 1;
    return acc;
  }, {});

  const transformedData = Object.entries(categoryCounts).map(
    ([categoryName, count]) => ({
      name: categoryName,
      value: count,
    })
  );
  return (
    <div>
      <div className="m-5">
        <div className="fs-5">{title}</div>
        <PieChart width={400} height={300}>
          <Pie
            dataKey="value"
            data={transformedData}
            cx={200}
            cy={150}
            outerRadius={120}
            fill="#8884d8"
          >
            {transformedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default CategoryPie;
