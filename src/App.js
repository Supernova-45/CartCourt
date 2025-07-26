import React, { useState, useEffect } from 'react';
import './App.css';
import { wishlistItems } from './data/wishlistData';
import Header from './components/Header';
import ImportSection from './components/ImportSection';
import SummaryDashboard from './components/SummaryDashboard';
import WishlistContainer from './components/WishlistContainer';
import ActionSummary from './components/ActionSummary';
import SearchPage from './components/SearchPage';
import ProfilePage from './components/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState('wishlist'); // 'wishlist', 'search', or 'profile'
  const [isImported, setIsImported] = useState(false);
  const [items, setItems] = useState([]);
  const [actionCounts, setActionCounts] = useState({
    waited: 0,
    swapped: 0,
    donated: 0
  });

  const handleImport = () => {
    setIsImported(true);
    // Add action state to each item
    const itemsWithActions = wishlistItems.map(item => ({
      ...item,
      action: null // null, 'wait', 'swap', 'donate'
    }));
    setItems(itemsWithActions);
  };

  const handleItemAction = (itemId, action) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId 
          ? { ...item, action: action }
          : item
      )
    );
  };

  // Update action counts when items change
  useEffect(() => {
    const counts = items.reduce((acc, item) => {
      if (item.action === 'wait') acc.waited++;
      else if (item.action === 'swap') acc.swapped++;
      else if (item.action === 'donate') acc.donated++;
      return acc;
    }, { waited: 0, swapped: 0, donated: 0 });
    
    setActionCounts(counts);
  }, [items]);

  // Calculate summary data
  const totalCost = items.reduce((sum, item) => sum + item.price, 0);
  const totalEmissions = items.reduce((sum, item) => sum + item.environmental.carbonFootprint, 0);
  const potentialSavings = items.reduce((sum, item) => {
    if (item.action === 'swap' && item.alternatives[0]) {
      return sum + item.alternatives[0].carbonReduction;
    }
    if (item.action === 'wait' || item.action === 'donate') {
      return sum + item.environmental.carbonFootprint;
    }
    return sum;
  }, 0);

  return (
    <div className="App">
      <Header />
      
      <nav className="navigation">
        <div className="container">
          <div className="nav-buttons">
            <button 
              className={`nav-btn ${currentPage === 'wishlist' ? 'active' : ''}`}
              onClick={() => setCurrentPage('wishlist')}
            >
              📋 Wishlist Analyzer
            </button>
            <button 
              className={`nav-btn ${currentPage === 'search' ? 'active' : ''}`}
              onClick={() => setCurrentPage('search')}
            >
              🔍 Product Search
            </button>
            <button 
              className={`nav-btn ${currentPage === 'profile' ? 'active' : ''}`}
              onClick={() => setCurrentPage('profile')}
            >
              👤 My Profile
            </button>
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        {currentPage === 'wishlist' ? (
          <div className="container">
            {!isImported ? (
              <ImportSection onImport={handleImport} />
            ) : (
              <>
                <SummaryDashboard 
                  totalCost={totalCost}
                  totalEmissions={totalEmissions}
                  itemCount={items.length}
                  potentialSavings={potentialSavings}
                />
                
                <WishlistContainer 
                  items={items}
                  onItemAction={handleItemAction}
                />
                
                <ActionSummary actionCounts={actionCounts} />
              </>
            )}
          </div>
        ) : currentPage === 'search' ? (
          <SearchPage />
        ) : (
          <ProfilePage />
        )}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sustainable Wishlist Analyzer. Making purchasing decisions that matter. 🌍</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
