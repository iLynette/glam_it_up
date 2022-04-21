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
      {/* <MdOutlineSentimentVerySatisfied /> */}
      <h3>
        Glam It Up
      </h3>
      <HiMicrophone />
    </div>
    {/* <div className="nav">
      <ul className="navMenus">
        <li>
          <NavLink className="home" to="/">
            <MdKeyboardArrowLeft />
          </NavLink>
        </li>
      </ul>
    </div> */}
  </nav>
);

export default Navbar;
