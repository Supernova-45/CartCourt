import React from 'react';
import WishlistItem from './WishlistItem';

const WishlistContainer = ({ items, onItemAction }) => {
  return (
    <div className="wishlist-container">
      <h2>Your Wishlist Analysis</h2>
      <div className="wishlist-items">
        {items.map(item => (
          <WishlistItem
            key={item.id}
            item={item}
            onAction={onItemAction}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistContainer;
