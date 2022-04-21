import React, { useState } from "react";
import PropTypes from 'prop-types';

const Categories = (props) => {
    const [product_type, setproduct_type] = useState('');
    const data = props;
    const newItem = [... new Set(data.data.map((makeup) => makeup.product_type))];
    const { handleClick } = props;

    return (
        <select className="items" onChange={(e) => setproduct_type(e.target.value)} onClick={handleClick} required>
            <option value="select a product type">select a product type</option>
            <option value={product_type}></option>
            {newItem.map((product_type) => (
                <option key={product_type} value={product_type}>
                    {product_type}
                </option>
            ))}
        </select>
    )
}

export default Categories