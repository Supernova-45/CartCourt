import React from 'react';

const ImportSection = ({ onImport }) => {
  return (
    <section className="import-section">
      <button 
        className="import-btn"
        onClick={onImport}
      >
        📋 Import Wishlist
      </button>
      <p className="import-note">Click to analyze your Amazon wishlist for environmental impact</p>
    </section>
  );
};

export default ImportSection;
