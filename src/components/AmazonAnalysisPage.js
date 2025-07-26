import React, { useState } from 'react';
import { keurigAnalysisData } from '../data/keurigAnalysisData';

const AmazonAnalysisPage = () => {
  const [amazonUrl, setAmazonUrl] = useState('');
  const [analysisData, setAnalysisData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!amazonUrl.trim()) return;

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes, always return the Keurig data
    setAnalysisData(keurigAnalysisData);
    setIsLoading(false);
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment.toLowerCase()) {
      case 'poor':
      case 'concerning': 
      case 'negative':
        return '#ef4444';
      case 'mixed':
        return '#f59e0b';
      case 'good':
      case 'positive':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  const getSustainabilityGrade = (score) => {
    if (score >= 80) return { grade: 'A', color: '#10b981' };
    if (score >= 70) return { grade: 'B', color: '#84cc16' };
    if (score >= 60) return { grade: 'C', color: '#f59e0b' };
    if (score >= 50) return { grade: 'D', color: '#f97316' };
    return { grade: 'F', color: '#ef4444' };
  };

  const getTagColor = (category) => {
    switch (category) {
      case 'repairability':
        return '#8b5cf6';
      case 'longevityDurability':
        return '#06b6d4';
      case 'materialSafety':
        return '#10b981';
      case 'greenwashing':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="amazon-analysis-page">
      <div className="analysis-hero">
        <div className="container">
          <h1>Amazon Product Footprint Analyzer</h1>
          <p className="analysis-subtitle">
            AI-powered sustainability analysis of Amazon products based on real customer reviews
          </p>
        </div>
      </div>

      <div className="container">
        <div className="analysis-form-section">
          <form onSubmit={handleAnalyze} className="analysis-form">
            <div className="form-group">
              <label htmlFor="amazon-url">Amazon Product URL</label>
              <div className="input-container">
                <input
                  id="amazon-url"
                  type="url"
                  placeholder="https://www.amazon.com/dp/..."
                  value={amazonUrl}
                  onChange={(e) => setAmazonUrl(e.target.value)}
                  className="url-input"
                  required
                />
                <button 
                  type="submit" 
                  className="analyze-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Analyzing...' : 'Analyze Product'}
                </button>
              </div>
            </div>
          </form>

          {!analysisData && (
            <div className="demo-section">
              <h3>Try our demo analysis:</h3>
              <button 
                className="demo-btn"
                onClick={() => {
                  setAmazonUrl('https://www.amazon.com/dp/B077JBQZPX');
                  setAnalysisData(keurigAnalysisData);
                }}
              >
                Analyze Keurig K-Elite Coffee Maker
              </button>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="loading-section">
            <div className="loading-spinner"></div>
            <p>Analyzing product reviews and calculating sustainability metrics...</p>
          </div>
        )}

        {analysisData && (
          <div className="analysis-results">
            {/* Product Header */}
            <div className="product-header">
              <div className="product-image">
                <img src={analysisData.productInfo.image} alt={analysisData.productInfo.title} />
              </div>
              <div className="product-details">
                <h2>{analysisData.productInfo.title}</h2>
                <p className="brand">by {analysisData.productInfo.brand}</p>
                <div className="product-meta">
                  <span className="price">${analysisData.productInfo.price}</span>
                  <span className="rating">★ {analysisData.productInfo.rating}</span>
                  <span className="reviews">({analysisData.productInfo.totalReviews.toLocaleString()} reviews)</span>
                </div>
                <div className="green-badge">
                  <span className={`badge ${analysisData.greenLabelVerified ? 'verified' : 'unverified'}`}>
                    {analysisData.greenLabelVerified ? '✓ Green Label Verified' : '✗ Green Label Not Verified'}
                  </span>
                </div>
              </div>
            </div>

            {/* Sustainability Score */}
            <div className="sustainability-section">
              <h3>Sustainability Score</h3>
              <div className="score-container">
                <div className="score-circle">
                  <div className="score-value">
                    {analysisData.sustainabilityScore}
                  </div>
                  <div className="score-grade">
                    {getSustainabilityGrade(analysisData.sustainabilityScore).grade}
                  </div>
                </div>
                <div className="score-breakdown">
                  {Object.entries(analysisData.reviewAnalysis.categories).map(([key, category]) => (
                    <div key={key} className="category-score">
                      <div className="category-header">
                        <span className="category-name">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </span>
                        <span className="category-value">{category.score}/100</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{
                            width: `${category.score}%`,
                            backgroundColor: getSentimentColor(category.sentiment)
                          }}
                        ></div>
                      </div>
                      <span 
                        className="sentiment-label"
                        style={{ color: getSentimentColor(category.sentiment) }}
                      >
                        {category.sentiment} ({category.mentions} mentions)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Analysis */}
            <div className="reviews-section">
              <h3>Review Analysis Highlights</h3>
              <p className="analysis-summary">{analysisData.aiInsights.summary}</p>
              
              <div className="highlighted-reviews">
                {analysisData.highlightedReviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="review-header">
                      <span className="review-user">{review.user}</span>
                      <div className="review-meta">
                        <span className="review-rating">{'★'.repeat(review.rating)}</span>
                        <span className="review-date">{review.date}</span>
                      </div>
                    </div>
                    <blockquote className="review-quote">"{review.quote}"</blockquote>
                    <div className="review-tags">
                      <span 
                        className="review-tag"
                        style={{ 
                          backgroundColor: getTagColor(review.category),
                          color: 'white'
                        }}
                      >
                        {review.tag}
                      </span>
                      <span 
                        className={`sentiment-indicator ${review.sentiment}`}
                      >
                        {review.sentiment}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="environmental-section">
              <h3>Environmental Impact</h3>
              <div className="impact-grid">
                {Object.entries(analysisData.environmentalImpact).map(([key, value]) => (
                  <div key={key} className="impact-item">
                    <div className="impact-label">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </div>
                    <div className="impact-value">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternatives */}
            <div className="alternatives-section">
              <h3>Sustainable Alternatives</h3>
              <div className="alternatives-grid">
                {analysisData.alternatives.map((alternative, index) => (
                  <div key={index} className="alternative-card">
                    <div className="alternative-header">
                      <h4>{alternative.name}</h4>
                      <div className="alternative-score">
                        Score: {alternative.sustainabilityScore}/100
                      </div>
                      <div className="alternative-price">${alternative.price}</div>
                    </div>
                    <div className="alternative-benefits">
                      <h5>Benefits:</h5>
                      <ul>
                        {alternative.benefits.map((benefit, i) => (
                          <li key={i} className="benefit">✓ {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="alternative-tradeoffs">
                      <h5>Trade-offs:</h5>
                      <ul>
                        {alternative.tradeoffs.map((tradeoff, i) => (
                          <li key={i} className="tradeoff">• {tradeoff}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <div className="insights-section">
              <h3>AI Analysis Summary</h3>
              <div className="key-findings">
                <h4>Key Findings:</h4>
                <ul>
                  {analysisData.aiInsights.keyFindings.map((finding, index) => (
                    <li key={index}>{finding}</li>
                  ))}
                </ul>
              </div>
              <div className="recommendation">
                <h4>Recommendation:</h4>
                <p>{analysisData.aiInsights.recommendation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmazonAnalysisPage;
