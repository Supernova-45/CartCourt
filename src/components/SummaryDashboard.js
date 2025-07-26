import React from 'react';

const SummaryDashboard = ({ totalCost, totalEmissions, itemCount, potentialSavings }) => {
  return (
    <div className="summary-dashboard">
      <div className="summary-cards">
        <div className="summary-card emissions">
          <h3>Total Carbon Footprint</h3>
          <div className="metric">
            <span className="number">{totalEmissions.toFixed(1)}</span>
            <span className="unit">kg CO₂</span>
          </div>
        </div>
        <div className="summary-card cost">
          <h3>Total Cost</h3>
          <div className="metric">
            <span className="number">${totalCost.toFixed(2)}</span>
          </div>
        </div>
        <div className="summary-card items">
          <h3>Items Analyzed</h3>
          <div className="metric">
            <span className="number">{itemCount}</span>
            <span className="unit">items</span>
          </div>
        </div>
        <div className="summary-card potential-savings">
          <h3>Potential CO₂ Savings</h3>
          <div className="metric">
            <span className="number">{potentialSavings.toFixed(1)}</span>
            <span className="unit">kg CO₂</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryDashboard;
