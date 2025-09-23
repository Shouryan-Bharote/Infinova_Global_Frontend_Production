import React, { useState } from 'react';
import '../global.css';
// Import your logo image - adjust the path as needed
import logoImage from '/eduventures.png'; // Update this path to your logo location

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = () => {
    console.log('Search query:', searchQuery);
    // Handle search functionality here
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo">
            <img 
              src={logoImage} 
              alt="Infinova Eduventures - Bridging your Career" 
              className="logo-image"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <span className="nav-text">For</span>
          <span className="nav-highlight">Students</span>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <div className="search-form">
            <div className="search-input-container">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <input
                type="text"
                placeholder="What do you want to learn ?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button onClick={handleSearchSubmit} className="search-button">
              Search
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;