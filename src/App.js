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
import AmazonAnalysisPage from './components/AmazonAnalysisPage';
import CartPage from './components/CartPage';
import WishlistChatBot from './components/WishlistChatBot';

function App() {
  const [currentPage, setCurrentPage] = useState('cart'); // 'wishlist', 'search', 'profile', 'amazon-analysis', or 'cart'
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
  // Fixed values as requested
  const totalEmissions = 50.0; // Fixed value of 50kg
  const potentialSavings = 31.5; // Fixed value of 31.5kg

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="main-content">
        {currentPage === 'wishlist' ? (
          <div className="wishlist-page">
            <div className="wishlist-hero">
              <div className="container">
                <h1>Wishlist Analyzer</h1>
                <p className="wishlist-subtitle">Analyze your Amazon wishlist for sustainability insights</p>
              </div>
            </div>
            
            <div className="container">
              <div className="wishlist-section">
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
                    <WishlistChatBot />
                  </>
                )}
              </div>
            </div>
          </div>
        ) : currentPage === 'search' ? (
          <SearchPage />
        ) : currentPage === 'amazon-analysis' ? (
          <AmazonAnalysisPage />
        ) : currentPage === 'cart' ? (
          <CartPage />
        ) : (
          <ProfilePage />
        )}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sustainable Wishlist Analyzer. Making purchasing decisions that matter.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
