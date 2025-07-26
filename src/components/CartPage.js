import React, { useState } from 'react';
import { cartItems, cartSummary } from '../data/cartData';
import { updatedCartItems, updatedCartSummary } from '../data/updatedCartData';
import ChatBot from './ChatBot';
import ImageLoader from './ImageLoader';
import './CartStyles.css';

const CartPage = () => {
  const [items, setItems] = useState(cartItems);
  const [summary, setSummary] = useState(cartSummary);
  const [showBundledBadge, setShowBundledBadge] = useState(false);
  const [showCarbonSavings, setShowCarbonSavings] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
    
    // Recalculate summary
    const newSubtotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSummary({
      ...summary,
      subtotal: newSubtotal,
      totalAfterSavings: newSubtotal - summary.giftCardSavings,
      itemCount: updatedItems.reduce((count, item) => count + item.quantity, 0)
    });
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    
    // Recalculate summary
    const newSubtotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSummary({
      ...summary,
      subtotal: newSubtotal,
      totalAfterSavings: newSubtotal - summary.giftCardSavings,
      itemCount: updatedItems.reduce((count, item) => count + item.quantity, 0)
    });
  };
  
  const handleReplacementConfirmed = () => {
    // Replace cart items with eco-friendly alternatives
    setItems(updatedCartItems);
    setSummary(updatedCartSummary);
    setShowBundledBadge(true);
    setShowCarbonSavings(true);
  };

  return (
    <div className="cart-page">
      <div className="cart-hero">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p className="cart-subtitle">Review and manage your sustainable shopping cart</p>
        </div>
      </div>

      <div className="container">
        <div className="cart-section">
          <div className="cart-container">
            <div className="cart-header">
              <div className="price-column">Price</div>
            </div>
            
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <div className="item-image">
                      <ImageLoader 
                        src={item.image}
                        alt={item.name} 
                      />
                    </div>
                    <div className="item-info">
                      <h3 className="item-name">{item.name}</h3>
                      {item.id === 1 && (
                        <div className="item-seller-info">
                          <span className="best-seller-badge">#1 Best Seller</span> in TV Trays
                        </div>
                      )}
                      <div className="item-stock">{item.inStock ? "In Stock" : "Out of Stock"}</div>
                      <div className="item-seller">
                        Sold by: {item.seller}
                      </div>
                      <div className="item-delivery-info">
                        <span className="item-delivery-date">
                          FREE delivery: Thu, Jul 31 (from {item.shippingFrom})
                          {item.bundledShipping && showBundledBadge && (
                            <span className="bundled-badge">Bundled Shipping</span>
                          )}
                        </span>
                      </div>
                      
                      <div className="item-actions">
                        <select 
                          className="quantity-select"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        >
                          {[...Array(10).keys()].map(num => (
                            <option key={num + 1} value={num + 1}>
                              Qty: {num + 1}
                            </option>
                          ))}
                        </select>
                        <span className="action-divider">|</span>
                        <button 
                          className="delete-btn"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </button>
                        <span className="action-divider">|</span>
                        <button className="save-for-later-btn">Save for later</button>
                        <span className="action-divider">|</span>
                        <button className="compare-btn">Compare with similar items</button>
                      </div>
                    </div>
                  </div>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
            
            <div className="cart-subtotal">
              Subtotal ({summary.itemCount} items): <span className="subtotal-price">${summary.subtotal.toFixed(2)}</span>
            </div>
            
            <div className="cart-sidebar">
              <div className="free-shipping-check">
                <div className="check-icon-green">✓</div>
                <div className="shipping-message">
                  <p>Part of your order qualifies for FREE Shipping.</p>
                  <p>Choose this option at checkout.</p>
                  <a href="#" className="shipping-details">See details</a>
                </div>
              </div>
              
              <div className="checkout-box">
                <div className="subtotal-summary">
                  <strong>Subtotal ({summary.itemCount} items):</strong> <span className="subtotal-price">${summary.subtotal.toFixed(2)}</span>
                </div>
                {showCarbonSavings && (
                  <div className="carbon-savings">
                    <span className="eco-icon">🌿</span> We went from 80 kg of emissions to an estimated 5 kg by making these changes!
                  </div>
                )}
                <div className="gift-checkbox">
                  <input type="checkbox" id="gift-option" />
                  <label htmlFor="gift-option">This order contains a gift</label>
                </div>
                <button className="checkout-btn">Proceed to checkout</button>
              </div>
              
              {/* Eco-friendly alternatives section removed */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot component */}
      <ChatBot onReplacementConfirmed={handleReplacementConfirmed} />
    </div>
  );
};

export default CartPage;
