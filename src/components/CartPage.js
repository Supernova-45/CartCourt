import React, { useState } from 'react';
import { cartItems, cartSummary } from '../data/cartData';
import './CartStyles.css';

const CartPage = () => {
  const [items, setItems] = useState(cartItems);
  const [summary, setSummary] = useState(cartSummary);

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

  return (
    <div className="cart-page">

      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        <div className="cart-header">
          <div className="price-column">Price</div>
        </div>
        
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <div className="item-image">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/180x180?text=Product+Image";
                    }}
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
                  <div className="item-seller">Sold by: {item.seller}</div>
                  <div className="item-delivery-info">
                    <span className="item-delivery-date">FREE delivery: Thu, Jul 31</span>
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
            <div className="gift-checkbox">
              <input type="checkbox" id="gift-option" />
              <label htmlFor="gift-option">This order contains a gift</label>
            </div>
            <button className="checkout-btn">Proceed to checkout</button>
          </div>
          
          <div className="eco-friendly-section">
            <h3>Eco-friendly alternatives</h3>
            <div className="eco-message">
              <p>
                <strong>Save ${(summary.subtotal * 0.15).toFixed(2)} and reduce your carbon footprint by 25%</strong> by 
                choosing eco-friendly alternatives for items in your cart.
              </p>
              <button className="view-alternatives-btn">View eco-friendly alternatives</button>
            </div>
          </div>
          
          <div className="recently-viewed">
            <h3>Your recently viewed items</h3>
            <div className="viewed-items">
              <div className="viewed-item">
                <img 
                  src={items[0].image} 
                  alt="Recently viewed" 
                />
                <div className="viewed-item-details">
                  <div className="viewed-item-name">Amazon Basics Portable TV Dinner 4-Pack</div>
                  <div className="viewed-item-rating">★★★★☆ 30,629</div>
                  <div className="viewed-item-price">$59<sup>99</sup></div>
                  <div className="viewed-item-delivery">
                    Get it as soon as <strong>Thursday, Jul 31</strong>
                  </div>
                  <div className="viewed-item-shipping">FREE Shipping by Amazon</div>
                  <button className="add-to-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
