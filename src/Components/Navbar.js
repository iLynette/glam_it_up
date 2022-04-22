import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiMicrophone } from 'react-icons/hi';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Navbar = () => (
  <nav className="navigationBar">
    <div className="bar">
      <ul className="navMenus">
        <li>
          <NavLink className="home" to="/">
            <MdKeyboardArrowLeft />
          </NavLink>
        </li>
      </ul>
      <h3>
        Glam It Up
      </h3>
      <HiMicrophone />
    </div>
  </nav>
);

export default Navbar;
