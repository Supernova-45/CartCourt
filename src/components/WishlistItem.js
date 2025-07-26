import React, { useState } from 'react';

const WishlistItem = ({ item, onAction }) => {
  const [selectedAlternative, setSelectedAlternative] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleSwap = () => {
    onAction(item.id, 'swap');
  };

  const handleWait = () => {
    onAction(item.id, 'wait');
  };

  const handleDonate = () => {
    onAction(item.id, 'donate');
  };

  const getActionButtonClass = (actionType) => {
    return `amazon-action-btn ${actionType} ${item.action === actionType ? 'selected' : ''}`;
  };

  const getSustainabilityColor = (score) => {
    if (score >= 7) return '#4CAF50';
    if (score >= 4) return '#FF9800';
    return '#F44336';
  };

  const formatPrice = (price) => {
    const whole = Math.floor(price);
    const fraction = ((price % 1) * 100).toFixed(0).padStart(2, '0');
    return { whole, fraction };
  };

  const { whole, fraction } = formatPrice(item.price);

  return (
    <div className="amazon-wishlist-item">
      <div className="amazon-item-main">
        <div className="amazon-item-image">
          <img 
            src={item.image} 
            alt={item.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/wishlist_files/default.png';
            }}
          />
        </div>
        
        <div className="amazon-item-details">
          <div className="amazon-item-info">
            <h3 className="amazon-item-title">
              <a href="#" className="amazon-title-link">{item.name}</a>
            </h3>
            <div className="amazon-item-meta">
              <span className="amazon-brand">by {item.brand}</span>
              <span className="amazon-category">{item.category}</span>
            </div>
            <p className="amazon-description">{item.description}</p>
            
            <div className="amazon-sustainability-badge">
              <span 
                className="amazon-score"
                style={{ backgroundColor: getSustainabilityColor(item.needsAssessment.sustainabilityScore) }}
              >
                {item.needsAssessment.sustainabilityScore}/10 Sustainability
              </span>
              <span className="amazon-carbon">
                {item.environmental.carbonFootprint} kg CO₂
              </span>
            </div>
            
            <div className="amazon-item-actions">
              <button 
                className="amazon-details-btn"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? '▼' : '▶'} Environmental Analysis
              </button>
              <button className={getActionButtonClass('wait')} onClick={handleWait}>
                ⏰ Wait 30 days
              </button>
              <button className={getActionButtonClass('swap')} onClick={handleSwap}>
                Find alternative
              </button>
              <button className={getActionButtonClass('donate')} onClick={handleDonate}>
                💝 Donate instead
              </button>
            </div>
          </div>
        </div>
        
        <div className="amazon-item-price">
          <div className="amazon-price-display">
            <span className="amazon-price-symbol">$</span>
            <span className="amazon-price-whole">{whole}</span>
            <span className="amazon-price-fraction">{fraction}</span>
          </div>
          <div className="amazon-item-controls">
            <select className="amazon-quantity-select" defaultValue="1">
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
            </select>
            <button className="amazon-delete-btn">Delete</button>
            <button className="amazon-add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="amazon-details-section">
          <div className="amazon-env-grid">
            <div className="amazon-env-card">
              <h4>Environmental Impact</h4>
              <div className="amazon-env-items">
                <div className="amazon-env-row">
                  <span>Carbon Footprint:</span>
                  <span>{item.environmental.carbonFootprint} kg CO₂</span>
                </div>
                <div className="amazon-env-row">
                  <span>Energy Usage:</span>
                  <span>{item.environmental.energyUsage}</span>
                </div>
                <div className="amazon-env-row">
                  <span>Recyclability:</span>
                  <span>{item.environmental.recyclability}</span>
                </div>
                <div className="amazon-env-row">
                  <span>Water Usage:</span>
                  <span>{item.environmental.waterUsage}L</span>
                </div>
              </div>
            </div>
            
            <div className="amazon-alt-card">
              <h4>Sustainable Alternatives</h4>
              <div className="amazon-alternatives">
                {item.alternatives.map((alt, index) => (
                  <div 
                    key={index} 
                    className={`amazon-alt-item ${selectedAlternative === index ? 'selected' : ''}`}
                    onClick={() => setSelectedAlternative(index)}
                  >
                    <div className="amazon-alt-name">{alt.name}</div>
                    <div className="amazon-alt-price">${alt.price.toFixed(2)}</div>
                    <div className="amazon-alt-savings">
                      Saves {alt.carbonReduction.toFixed(1)} kg CO₂
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="amazon-assessment-card">
              <h4>🤔 Need Assessment</h4>
              <div className="amazon-assessment-info">
                <div>Usage: {item.needsAssessment.frequency}</div>
                <div>Consider instead:</div>
                <ul className="amazon-alt-list">
                  {item.needsAssessment.alternatives.slice(0, 3).map((alt, idx) => (
                    <li key={idx}>{alt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {item.action && (
            <div className="amazon-action-feedback">
              {item.action === 'wait' && (
                <div className="amazon-feedback wait">
                  Great choice! Waiting helps reduce impulse purchases and lets you evaluate if you really need this item.
                </div>
              )}
              {item.action === 'swap' && (
                <div className="amazon-feedback swap">
                  Excellent! You've chosen the {item.alternatives[selectedAlternative].name} - a more sustainable option that saves {item.alternatives[selectedAlternative].carbonReduction.toFixed(1)} kg CO₂.
                </div>
              )}
              {item.action === 'donate' && (
                <div className="amazon-feedback donate">
                  Wonderful! Redirecting $${item.price} to charitable causes creates positive impact and avoids environmental costs.
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WishlistItem;
