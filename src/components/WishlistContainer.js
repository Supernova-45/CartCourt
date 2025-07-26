import React from 'react';
import WishlistItem from './WishlistItem';

const WishlistContainer = ({ items, onItemAction }) => {
  const totalItems = items.length;
  const totalValue = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="amazon-wishlist-container">
      <div className="amazon-wishlist-header">
        <div className="amazon-wishlist-title">
          <h1>My Sustainable Wishlist</h1>
          <div className="amazon-wishlist-meta">
            <span className="amazon-item-count">{totalItems} items</span>
            <span className="amazon-total-value">
              Total: ${totalValue.toFixed(2)}
            </span>
          </div>
        </div>
        
        <div className="amazon-wishlist-controls">
          <select className="amazon-sort-select">
            <option value="default">Sort: Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="sustainability">Sustainability Score</option>
            <option value="carbon">Carbon Footprint</option>
          </select>
          
          <select className="amazon-view-select">
            <option value="list">List view</option>
            <option value="grid">Grid view</option>
          </select>
          
          <button className="amazon-share-list">Share list</button>
        </div>
      </div>

      <div className="amazon-wishlist-items">
        {items.map(item => (
          <WishlistItem
            key={item.id}
            item={item}
            onAction={onItemAction}
          />
        ))}
      </div>
      
      <div className="amazon-wishlist-footer">
        <p className="amazon-footer-note">
          This sustainable wishlist analyzer helps you make more conscious purchasing decisions by showing environmental impact and suggesting alternatives.
        </p>
      </div>
    </div>
  );
};

export default WishlistContainer;
