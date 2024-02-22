import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/discuss" activeClassName="active">
            Discuss
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/events" activeClassName="active">
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
