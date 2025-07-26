import React, { useState, useEffect } from 'react';
import { coffeeMachineData } from '../data/coffeeMachineData';

const SearchResults = ({ query, onNewSearch }) => {
  const [sortBy, setSortBy] = useState('sustainability'); // sustainability, price, rating
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Simulate search processing - in real app this would call an API
    setResults(coffeeMachineData);
  }, [query]);

  const getSortedResults = () => {
    const sorted = [...results].sort((a, b) => {
      switch (sortBy) {
        case 'sustainability':
          return (b.reviewAnalysis.durabilityScore + b.reviewAnalysis.repairabilityScore) - 
                 (a.reviewAnalysis.durabilityScore + a.reviewAnalysis.repairabilityScore);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    return sorted;
  };

  const getSustainabilityGrade = (product) => {
    const score = (product.reviewAnalysis.durabilityScore + product.reviewAnalysis.repairabilityScore + product.reviewAnalysis.materialQualityScore) / 3;
    if (score >= 8.5) return { grade: 'A+', color: '#4CAF50' };
    if (score >= 7.5) return { grade: 'A', color: '#8BC34A' };
    if (score >= 6.5) return { grade: 'B', color: '#FF9800' };
    if (score >= 5.5) return { grade: 'C', color: '#FF5722' };
    return { grade: 'D', color: '#F44336' };
  };

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className="search-results">
      <div className="results-header">
        <h2>Coffee Machine Recommendations</h2>
        <p className="results-summary">
          Found {results.length} sustainable options based on analysis of {results.reduce((sum, item) => sum + item.totalReviews, 0).toLocaleString()} customer reviews
        </p>
        
        <div className="sort-controls">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
            <option value="sustainability">Sustainability Score</option>
            <option value="price">Price (Low to High)</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>

      <div className="results-grid">
        {getSortedResults().map(product => {
          const sustainabilityGrade = getSustainabilityGrade(product);
          
          return (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div 
                  className="sustainability-badge" 
                  style={{ backgroundColor: sustainabilityGrade.color }}
                >
                  {sustainabilityGrade.grade}
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-brand">by {product.brand}</p>
                <p className="product-category">{product.category}</p>
                
                <div className="product-rating">
                  <span className="stars">{renderStars(product.rating)}</span>
                  <span className="rating-text">{product.rating}/5 ({product.totalReviews.toLocaleString()} reviews)</span>
                </div>
                
                <div className="product-price">
                  <span className="price-symbol">$</span>
                  <span className="price-whole">{Math.floor(product.price)}</span>
                  <span className="price-fraction">.{((product.price % 1) * 100).toFixed(0).padStart(2, '0')}</span>
                </div>
                
                <div className="review-analysis-summary">
                  <h4>Review Analysis Highlights</h4>
                  <div className="analysis-metrics">
                    <div className="metric">
                      <span className="metric-label">Sustainability Mentions:</span>
                      <span className="metric-value">{product.reviewAnalysis.sustainabilityMentions}</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Durability Score:</span>
                      <span className="metric-value">{product.reviewAnalysis.durabilityScore}/10</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Repairability:</span>
                      <span className="metric-value">{product.reviewAnalysis.repairabilityScore}/10</span>
                    </div>
                  </div>
                </div>
                
                <div className="sustainability-highlights">
                  <h4>Sustainability Highlights</h4>
                  <ul>
                    {product.sustainabilityHighlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="view-details-btn"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Full Analysis
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>✕</button>
            
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedProduct.name}</h2>
                <div className="modal-price">
                <span className="price-symbol">$</span>
                <span className="price-whole">{Math.floor(selectedProduct.price)}</span>
                <span className="price-fraction">.{((selectedProduct.price % 1) * 100).toFixed(0).padStart(2, '0')}</span>
              </div>
              </div>
              
              <div className="modal-body">
                <div className="environmental-impact">
                  <h3>Environmental Impact</h3>
                  <div className="env-grid">
                    <div className="env-item">
                      <span>Carbon Footprint:</span>
                      <span>{selectedProduct.environmental.carbonFootprint} kg CO₂</span>
                    </div>
                    <div className="env-item">
                      <span>Energy Usage:</span>
                      <span>{selectedProduct.environmental.energyUsage}</span>
                    </div>
                    <div className="env-item">
                      <span>Recyclability:</span>
                      <span>{selectedProduct.environmental.recyclability}</span>
                    </div>
                    <div className="env-item">
                      <span>Water Usage:</span>
                      <span>{selectedProduct.environmental.waterUsage}L</span>
                    </div>
                  </div>
                </div>

                <div className="review-insights">
                  <h3>What Reviewers Are Saying</h3>
                  
                  <div className="review-themes">
                    <div className="positive-themes">
                      <h4>Positive Themes</h4>
                      <ul>
                        {selectedProduct.reviewInsights.positiveThemes.map((theme, idx) => (
                          <li key={idx}>{theme}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="concerns">
                      <h4>Common Concerns</h4>
                      <ul>
                        {selectedProduct.reviewInsights.concerns.map((concern, idx) => (
                          <li key={idx}>{concern}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="sustainability-reviews">
                    <h4>Sustainability-Focused Reviews</h4>
                    {selectedProduct.reviewInsights.sustainabilityReviews.map((review, idx) => (
                      <div key={idx} className="review-quote">
                        <div className="review-header">
                          <strong>{review.user}</strong>
                          <span className="review-rating">
                            {renderStars(review.rating)}
                          </span>
                        </div>
                        <p>"{review.comment}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="alternatives">
                  <h3>Sustainable Alternatives</h3>
                  <div className="alternatives-list">
                    {selectedProduct.alternatives.map((alt, idx) => (
                      <div key={idx} className="alternative-card">
                        <h4>{alt.name}</h4>
                        <div className="alt-price">
                          <span className="price-symbol">$</span>
                          <span className="price-whole">{Math.floor(alt.price)}</span>
                          <span className="price-fraction">.{((alt.price % 1) * 100).toFixed(0).padStart(2, '0')}</span>
                        </div>
                        <div className="carbon-savings">
                          Saves {alt.carbonReduction} kg CO₂
                        </div>
                        <div className="alt-benefits">
                          {alt.benefits.map((benefit, bidx) => (
                            <span key={bidx} className="benefit-tag">{benefit}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="search-again">
        <button className="search-again-btn" onClick={onNewSearch}>
          Search for Different Products
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
