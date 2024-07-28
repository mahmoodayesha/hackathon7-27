import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToBase }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Event <span className="highlight">Finder</span></span>
      </div>
      <div className="navbar-buttons">
        <button className="ai-button" onClick={scrollToBase}>Use AI</button>
      </div>
    </nav>
  );
};

export default Navbar;