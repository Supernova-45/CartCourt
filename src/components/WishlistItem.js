import React, { useState } from 'react';

const WishlistItem = ({ item, onAction }) => {
  const [selectedAlternative, setSelectedAlternative] = useState(0);
  const [showChallenge, setShowChallenge] = useState(false);

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
    return `action-btn ${actionType} ${item.action === actionType ? 'selected' : ''}`;
  };

  const getSustainabilityColor = (score) => {
    if (score >= 7) return '#4CAF50'; // Green
    if (score >= 4) return '#FF9800'; // Orange
    return '#F44336'; // Red
  };

  return (
    <div className="wishlist-item">
      <div className="item-header">
        <div className="item-info">
          <h3>{item.name}</h3>
          <p className="item-brand">by {item.brand}</p>
          <p className="item-category">{item.category}</p>
        </div>
        <div className="item-price">${item.price}</div>
      </div>

      <div className="item-content">
        <div className="environmental-section">
          <h4>🌍 Environmental Impact</h4>
          <div className="environmental-grid">
            <div className="env-item">
              <span className="env-label">Carbon Footprint:</span>
              <span className="env-value">{item.environmental.carbonFootprint} kg CO₂</span>
            </div>
            <div className="env-item">
              <span className="env-label">Microplastics:</span>
              <span className="env-value">{item.environmental.microplastics}</span>
            </div>
            <div className="env-item">
              <span className="env-label">Energy Usage:</span>
              <span className="env-value">{item.environmental.energyUsage}</span>
            </div>
            <div className="env-item">
              <span className="env-label">Water Usage:</span>
              <span className="env-value">{item.environmental.waterUsage}L</span>
            </div>
            <div className="env-item">
              <span className="env-label">Recyclability:</span>
              <span className="env-value">{item.environmental.recyclability}</span>
            </div>
            <div className="env-item">
              <span className="env-label">Packaging:</span>
              <span className="env-value">{item.environmental.packaging}</span>
            </div>
          </div>
        </div>

        <div className="alternatives-section">
          <h4>♻️ Greener Alternatives</h4>
          <div className="alternatives-selector">
            {item.alternatives.map((alt, index) => (
              <button
                key={index}
                className={`alternative-option ${selectedAlternative === index ? 'selected' : ''}`}
                onClick={() => setSelectedAlternative(index)}
              >
                Option {index + 1}
              </button>
            ))}
          </div>
          
          <div className="alternative-details">
            <div className="alternative-info">
              <h5>{item.alternatives[selectedAlternative].name}</h5>
              <div className="alternative-price">
                ${item.alternatives[selectedAlternative].price.toFixed(2)}
              </div>
              <div className="carbon-reduction">
                🌱 Saves {item.alternatives[selectedAlternative].carbonReduction.toFixed(1)} kg CO₂
              </div>
              <div className="benefits">
                <strong>Benefits:</strong>
                <ul>
                  {item.alternatives[selectedAlternative].benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="swap-btn" onClick={handleSwap}>
              🔄 Swap to This Alternative
            </button>
          </div>
        </div>

        <div className="needs-assessment">
          <h4>🤔 Do You Really Need This?</h4>
          <div className="assessment-info">
            <div className="usage-frequency">
              <strong>Expected Usage:</strong> {item.needsAssessment.frequency}
            </div>
            <div className="sustainability-score">
              <strong>Sustainability Score:</strong>
              <span 
                className="score-badge"
                style={{ backgroundColor: getSustainabilityColor(item.needsAssessment.sustainabilityScore) }}
              >
                {item.needsAssessment.sustainabilityScore}/10
              </span>
            </div>
            <div className="alternatives-list">
              <strong>Consider Instead:</strong>
              <ul>
                {item.needsAssessment.alternatives.map((alt, idx) => (
                  <li key={idx}>{alt}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <button 
            className="challenge-btn"
            onClick={() => setShowChallenge(!showChallenge)}
          >
            💭 Challenge This Purchase
          </button>
          
          {showChallenge && (
            <div className="challenge-section">
              <h5>Choose Your Action:</h5>
              <div className="action-buttons">
                <button 
                  className={getActionButtonClass('wait')}
                  onClick={handleWait}
                >
                  ⏰ Wait 30 Days
                </button>
                <button 
                  className={getActionButtonClass('swap')}
                  onClick={handleSwap}
                >
                  🔄 Swap Alternative
                </button>
                <button 
                  className={getActionButtonClass('donate')}
                  onClick={handleDonate}
                >
                  💝 Donate Instead
                </button>
              </div>
              
              {item.action && (
                <div className="action-feedback">
                  {item.action === 'wait' && (
                    <p>✅ Great choice! Waiting helps reduce impulse purchases.</p>
                  )}
                  {item.action === 'swap' && (
                    <p>✅ Excellent! You're choosing a more sustainable option.</p>
                  )}
                  {item.action === 'donate' && (
                    <p>✅ Wonderful! Redirecting funds to causes creates positive impact.</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
