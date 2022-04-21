import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => {
  const [productType, setProductType] = useState('');
  const data = props;
  const newItem = [...new Set(data.data.map((makeup) => makeup.productType))];
  const { handleClick } = props;

  return (
    <select className="items" onChange={(e) => setProductType(e.target.value)} onClick={handleClick} required>
      <option value="select a product type">select a product type</option>
      <option value={productType} aria-label="Save" />
      {newItem.map((productType) => (
        <option key={productType} value={productType}>
          {productType}
        </option>
      ))}
    </select>
  );
};

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
