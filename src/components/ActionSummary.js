import React from 'react';

const ActionSummary = ({ actionCounts }) => {
  const totalActions = actionCounts.waited + actionCounts.swapped + actionCounts.donated;

  if (totalActions === 0) return null;

  return (
    <div className="action-summary">
      <h3>🎯 Your Sustainability Actions</h3>
      <div className="action-stats">
        <div className="action-stat wait">
          <span className="action-count">{actionCounts.waited}</span>
          <span className="action-label">Items Waiting</span>
          <p className="action-description">Taking time to reconsider</p>
        </div>
        <div className="action-stat swap">
          <span className="action-count">{actionCounts.swapped}</span>
          <span className="action-label">Items Swapped</span>
          <p className="action-description">Chose greener alternatives</p>
        </div>
        <div className="action-stat donate">
          <span className="action-count">{actionCounts.donated}</span>
          <span className="action-label">Items to Donate</span>
          <p className="action-description">Redirecting to meaningful causes</p>
        </div>
      </div>
      
      <div className="impact-summary">
        <h4>🌟 Impact Summary</h4>
        <p>You've taken conscious action on <strong>{totalActions}</strong> items, showing commitment to sustainable consumption!</p>
        {actionCounts.waited > 0 && (
          <p>💡 <strong>Waiting</strong> reduces impulse purchases and helps clarify true needs.</p>
        )}
        {actionCounts.swapped > 0 && (
          <p>🌱 <strong>Swapping</strong> to alternatives reduces your environmental footprint.</p>
        )}
        {actionCounts.donated > 0 && (
          <p>💝 <strong>Donating</strong> creates positive social impact while avoiding unnecessary consumption.</p>
        )}
      </div>
    </div>
  );
};

export default ActionSummary;
