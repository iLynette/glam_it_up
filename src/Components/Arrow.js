import React from 'react';
import { HiArrowCircleRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Btn = (props) => {
    const { id } = props;
    const { handleClick } = props;
    return (
        <NavLink className="btn" onClick={handleClick} to={`/details/${id}`}>
            <HiArrowCircleRight />
        </NavLink>
    )
}

Btn.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
}

export default Btn