import React from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="app-title">Sustainable Wishlist Analyzer</h1>
        </div>
        <nav className="header-nav">
          <button 
            className={`nav-link ${currentPage === 'wishlist' ? 'active' : ''}`}
            onClick={() => setCurrentPage('wishlist')}
          >
            Wishlist Analyzer
          </button>
          <button 
            className={`nav-link ${currentPage === 'search' ? 'active' : ''}`}
            onClick={() => setCurrentPage('search')}
          >
            Product Search
          </button>
          <button 
            className={`nav-link ${currentPage === 'amazon-analysis' ? 'active' : ''}`}
            onClick={() => setCurrentPage('amazon-analysis')}
          >
            Amazon Analysis
          </button>
          <button 
            className={`nav-link ${currentPage === 'cart' ? 'active' : ''}`}
            onClick={() => setCurrentPage('cart')}
          >
            Shopping Cart
          </button>
          <button 
            className={`nav-link ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={() => setCurrentPage('profile')}
          >
            My Profile
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
