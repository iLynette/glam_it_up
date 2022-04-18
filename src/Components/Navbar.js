import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <h3>Glam It Up</h3>
    <div className="navItems">
      <ul className="navMenu">
        <li><NavLink className="homepage" to="/">HomePage</NavLink></li>
        <li><NavLink className="detailspage" to="/detailspage">DetailsPage </NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
