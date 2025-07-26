import React, { useState } from 'react';
import SearchResults from './SearchResults';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-page">
      <div className="search-hero">
        <div className="container">
          <h1>Sustainable Product Search</h1>
          <p className="search-subtitle">Find eco-friendly alternatives based on real review analysis</p>
        </div>
      </div>

      <div className="container">
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search for products (try 'coffee machine', 'espresso maker', or 'coffee')"
                value={searchQuery}
                onChange={handleInputChange}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </div>
          </form>

          {!hasSearched && (
            <div className="search-suggestions">
              <h3>Popular Sustainable Searches:</h3>
              <div className="suggestion-chips">
                <button 
                  className="suggestion-chip" 
                  onClick={() => {setSearchQuery('coffee machine'); setHasSearched(true);}}
                >
                  Coffee Machines
                </button>
                <button 
                  className="suggestion-chip" 
                  onClick={() => {setSearchQuery('espresso maker'); setHasSearched(true);}}
                >
                  Espresso Makers
                </button>
                <button 
                  className="suggestion-chip" 
                  onClick={() => {setSearchQuery('sustainable coffee'); setHasSearched(true);}}
                >
                  Eco-Friendly Coffee
                </button>
              </div>
              
              <div className="search-info">
                <div className="info-card">
                  <h4>How Our Analysis Works</h4>
                  <ul>
                    <li><strong>Review Mining:</strong> We analyze thousands of product reviews</li>
                    <li><strong>Sustainability Focus:</strong> Extract mentions of durability, repairability, and eco-impact</li>
                    <li><strong>Environmental Scoring:</strong> Calculate carbon footprint and material impact</li>
                    <li><strong>Alternative Suggestions:</strong> Recommend greener options based on user needs</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {hasSearched && (
            <SearchResults 
              query={searchQuery} 
              onNewSearch={() => setHasSearched(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
