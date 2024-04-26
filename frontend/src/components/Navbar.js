// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';// Import the corresponding CSS file

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        {!isLoggedIn && (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li className="nav-item">
            <button onClick={onLogout} className="nav-link-button">Sign Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
