import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => {
  const [product, setProductType] = useState('');
  const data = props;
  const newItem = [...new Set(data.data.map((makeup) => makeup.product_type))];
  const { handleClick } = props;

  const handleSelected = (s) => {
    setProductType(s);
    handleClick(s);
  };

  return (
    <select className="items" onChange={(e) => handleSelected(e.target.value)} required>
      <option value="select a product type">
        select a product type
        {product}
      </option>
      {newItem.map((product) => (
        <option key={product} value={product}>
          {product}
        </option>
      ))}
    </select>
  );
};

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
