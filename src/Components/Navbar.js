import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiMicrophone } from 'react-icons/hi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FaRegSun } from "react-icons/fa";


const Navbar = () => (
  <nav className="navigationBar">
    <div className="bar">
      <ul className="navMenus">
        <li>
          <NavLink className="home" to="/">
            <MdKeyboardArrowLeft className="arrow" />
            <span>2015</span>
          </NavLink>
        </li>
      </ul>
      <h3>
        Glam It Up
      </h3>
      <span className="one">
        <HiMicrophone className="arrow" />
        <FaRegSun />
      </span>
    </div>
  </nav>
);

export default Navbar;
