import React, { useState } from "react";
import PropTypes from 'prop-types';

const Categories = (props) => {
    const [product_type, setproduct_type] = useState('');
    const data = props;
    const newItem = [... new Set(data.data.map((makeup) => makeup.product_type))];
    const { handleClick } = props;
}

export default Categories