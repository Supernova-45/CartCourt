import React, { useState } from 'react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data - in real app this would come from a database
  const userStats = {
    carbonSaved: 127.5, // kg CO2
    greenPoints: 1850,
    level: 3,
    nextLevelPoints: 2000,
    joinDate: 'January 2024',
    totalDecisions: 24,
    streak: 12 // days
  };

  const carbonOverTime = [
    { month: 'Jan', carbon: 15.2 },
    { month: 'Feb', carbon: 23.8 },
    { month: 'Mar', carbon: 18.5 },
    { month: 'Apr', carbon: 31.2 },
    { month: 'May', carbon: 28.9 },
    { month: 'Jun', carbon: 35.4 }
  ];

  const impactByCategory = [
    { category: 'Electronics', carbon: 45.3, percentage: 35 },
    { category: 'Fashion', carbon: 32.1, percentage: 25 },
    { category: 'Home & Garden', carbon: 25.7, percentage: 20 },
    { category: 'Kitchen', carbon: 15.8, percentage: 12 },
    { category: 'Other', carbon: 8.6, percentage: 8 }
  ];

  const decisionHistory = [
    {
      id: 1,
      item: 'Nespresso VertuoPlus Coffee Maker',
      originalPrice: 199.95,
      action: 'swapped',
      alternative: 'AeroPress Coffee Maker',
      newPrice: 39.95,
      carbonSaved: 42.1,
      date: '2024-06-15',
      points: 150
    },
    {
      id: 2,
      item: 'Smart LED Strip Lights',
      originalPrice: 49.99,
      action: 'waited',
      alternative: null,
      newPrice: 0,
      carbonSaved: 12.3,
      date: '2024-06-10',
      points: 75
    },
    {
      id: 3,
      item: 'Bluetooth Wireless Earbuds',
      originalPrice: 89.99,
      action: 'donated',
      alternative: 'Local Music Education Program',
      newPrice: 89.99,
      carbonSaved: 18.7,
      date: '2024-06-08',
      points: 100
    },
    {
      id: 4,
      item: 'Hamilton Beach FlexBrew Coffee Maker',
      originalPrice: 129.99,
      action: 'swapped',
      alternative: 'French Press + Electric Kettle',
      newPrice: 45.00,
      carbonSaved: 18.9,
      date: '2024-06-05',
      points: 120
    },
    {
      id: 5,
      item: 'Ring Video Doorbell',
      originalPrice: 179.99,
      action: 'waited',
      alternative: null,
      newPrice: 0,
      carbonSaved: 25.2,
      date: '2024-06-01',
      points: 100
    }
  ];

  const [preferences, setPreferences] = useState({
    reminderFrequency: 'weekly',
    challengeLevel: 'moderate',
    categories: ['electronics', 'fashion', 'home'],
    notifications: {
      waitPeriodEnd: true,
      newAlternatives: true,
      achievementUnlocked: true,
      weeklyReport: false
    }
  });

  const getActionIcon = (action) => {
    switch (action) {
      case 'swapped': return '↻';
      case 'waited': return '⏰';
      case 'donated': return '♥';
      default: return '•';
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case 'swapped': return '#4CAF50';
      case 'waited': return '#2196F3';
      case 'donated': return '#9C27B0';
      default: return '#666';
    }
  };

  const maxCarbonValue = Math.max(...carbonOverTime.map(d => d.carbon));
  const maxCategoryPercentage = Math.max(...impactByCategory.map(d => d.percentage));

  return (
    <div className="profile-page">
      <div className="profile-hero">
        <div className="container">
          <div className="profile-hero-content">
            <div className="profile-avatar">
              <div className="avatar-circle">♻</div>
              <div className="level-badge">Level {userStats.level}</div>
            </div>
            <div className="profile-info">
              <h1>Your Sustainability Journey</h1>
              <p>Member since {userStats.joinDate}</p>
              <div className="streak-counter">
                🔥 {userStats.streak} day streak
              </div>
            </div>
          </div>

          <div className="stats-overview">
            <div className="stat-card primary">
              <div className="stat-icon">♻</div>
              <div className="stat-content">
                <div className="stat-number">{userStats.carbonSaved}<span className="unit">kg</span></div>
                <div className="stat-label">CO₂ Saved</div>
              </div>
            </div>
            <div className="stat-card secondary">
              <div className="stat-icon">★</div>
              <div className="stat-content">
                <div className="stat-number">{userStats.greenPoints.toLocaleString()}</div>
                <div className="stat-label">Green Points</div>
              </div>
            </div>
            <div className="stat-card tertiary">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-number">{userStats.totalDecisions}</div>
                <div className="stat-label">Smart Decisions</div>
              </div>
            </div>
          </div>

          <div className="progress-section">
            <div className="level-progress">
              <div className="progress-info">
                <span>Progress to Level {userStats.level + 1}</span>
                <span>{userStats.nextLevelPoints - userStats.greenPoints} points to go</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(userStats.greenPoints / userStats.nextLevelPoints) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="profile-section">
          <div className="profile-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              Decision History
            </button>
            <button 
              className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
              onClick={() => setActiveTab('preferences')}
            >
              Preferences
            </button>
          </div>

          <div className="profile-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <div className="charts-section">
              <div className="chart-card">
                <h3>Carbon Saved Over Time</h3>
                <div className="chart-container">
                  <div className="bar-chart">
                    {carbonOverTime.map((data, index) => (
                      <div key={index} className="bar-group">
                        <div 
                          className="bar"
                          style={{ 
                            height: `${(data.carbon / maxCarbonValue) * 100}%`,
                            backgroundColor: '#4CAF50'
                          }}
                        ></div>
                        <div className="bar-value">{data.carbon}kg</div>
                        <div className="bar-label">{data.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="chart-card">
                <h3>Impact by Category</h3>
                <div className="category-chart">
                  {impactByCategory.map((category, index) => (
                    <div key={index} className="category-item">
                      <div className="category-info">
                        <span className="category-name">{category.category}</span>
                        <span className="category-value">{category.carbon}kg CO₂</span>
                      </div>
                      <div className="category-bar">
                        <div 
                          className="category-fill"
                          style={{ 
                            width: `${(category.percentage / maxCategoryPercentage) * 100}%`,
                            backgroundColor: `hsl(${120 - (index * 30)}, 60%, 50%)`
                          }}
                        ></div>
                      </div>
                      <span className="category-percentage">{category.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="achievements-section">
                              <h3>Recent Achievements</h3>
              <div className="achievements-grid">
                <div className="achievement-badge earned">
                  <div className="badge-icon">🌟</div>
                  <div className="badge-info">
                    <div className="badge-title">Eco Champion</div>
                    <div className="badge-desc">Saved 100kg+ CO₂</div>
                  </div>
                </div>
                <div className="achievement-badge earned">
                  <div className="badge-icon">⚡</div>
                  <div className="badge-info">
                    <div className="badge-title">Quick Decider</div>
                    <div className="badge-desc">10 day streak</div>
                  </div>
                </div>
                <div className="achievement-badge locked">
                  <div className="badge-icon">⚡</div>
                  <div className="badge-info">
                    <div className="badge-title">Master Swapper</div>
                    <div className="badge-desc">50 swaps made</div>
                  </div>
                </div>
                <div className="achievement-badge locked">
                  <div className="badge-icon">💚</div>
                  <div className="badge-info">
                    <div className="badge-title">Planet Protector</div>
                    <div className="badge-desc">Save 500kg CO₂</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="history-tab">
            <div className="history-header">
                              <h3>Your Decision History</h3>
              <div className="history-stats">
                <div className="history-stat">
                  <span className="stat-value">{decisionHistory.filter(d => d.action === 'swapped').length}</span>
                  <span className="stat-label">Swapped</span>
                </div>
                <div className="history-stat">
                  <span className="stat-value">{decisionHistory.filter(d => d.action === 'waited').length}</span>
                  <span className="stat-label">Waited</span>
                </div>
                <div className="history-stat">
                  <span className="stat-value">{decisionHistory.filter(d => d.action === 'donated').length}</span>
                  <span className="stat-label">Donated</span>
                </div>
              </div>
            </div>

            <div className="decision-list">
              {decisionHistory.map(decision => (
                <div key={decision.id} className="decision-item">
                  <div className="decision-header">
                    <div className="decision-action">
                      <span 
                        className="action-icon"
                        style={{ color: getActionColor(decision.action) }}
                      >
                        {getActionIcon(decision.action)}
                      </span>
                      <div className="decision-info">
                        <h4>{decision.item}</h4>
                        <p className="decision-date">{new Date(decision.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="decision-points">
                      <span className="points-earned">+{decision.points} pts</span>
                    </div>
                  </div>

                  <div className="decision-details">
                    <div className="decision-financial">
                      <span className="original-price">Original: ${decision.originalPrice}</span>
                      {decision.action === 'swapped' && (
                        <span className="new-price">→ New: ${decision.newPrice}</span>
                      )}
                      {decision.action === 'waited' && (
                        <span className="saved-money">→ Saved: ${decision.originalPrice}</span>
                      )}
                      {decision.action === 'donated' && (
                        <span className="donated-amount">→ Donated: ${decision.newPrice}</span>
                      )}
                    </div>
                    
                    <div className="decision-impact">
                      <span className="carbon-saved">{decision.carbonSaved}kg CO₂ saved</span>
                    </div>

                    {decision.alternative && (
                      <div className="decision-alternative">
                        <span className="alternative-text">
                          {decision.action === 'swapped' ? 'Swapped to:' : 
                           decision.action === 'donated' ? 'Donated to:' : 'Alternative:'} 
                          <strong> {decision.alternative}</strong>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="preferences-tab">
            <div className="preferences-section">
                              <h3>Reminder Settings</h3>
              <div className="preference-group">
                <label className="preference-label">
                  Reminder Frequency
                  <select 
                    value={preferences.reminderFrequency}
                    onChange={(e) => setPreferences({...preferences, reminderFrequency: e.target.value})}
                    className="preference-select"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="never">Never</option>
                  </select>
                </label>

                <label className="preference-label">
                  Challenge Level
                  <select 
                    value={preferences.challengeLevel}
                    onChange={(e) => setPreferences({...preferences, challengeLevel: e.target.value})}
                    className="preference-select"
                  >
                    <option value="easy">Easy - Gentle nudges</option>
                    <option value="moderate">Moderate - Regular challenges</option>
                    <option value="hard">Hard - Strict sustainability goals</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="preferences-section">
                              <h3>Category Interests</h3>
              <div className="category-preferences">
                {['Electronics', 'Fashion', 'Home & Garden', 'Kitchen', 'Sports & Outdoors', 'Books & Media'].map(category => (
                  <label key={category} className="category-checkbox">
                    <input 
                      type="checkbox"
                      checked={preferences.categories.includes(category.toLowerCase().replace(' & ', '').replace(' ', ''))}
                      onChange={(e) => {
                        const categoryKey = category.toLowerCase().replace(' & ', '').replace(' ', '');
                        if (e.target.checked) {
                          setPreferences({...preferences, categories: [...preferences.categories, categoryKey]});
                        } else {
                          setPreferences({...preferences, categories: preferences.categories.filter(c => c !== categoryKey)});
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div className="preferences-section">
                              <h3>Notification Preferences</h3>
              <div className="notification-preferences">
                {Object.entries(preferences.notifications).map(([key, value]) => (
                  <label key={key} className="notification-toggle">
                    <input 
                      type="checkbox"
                      checked={value}
                      onChange={(e) => setPreferences({
                        ...preferences, 
                        notifications: {...preferences.notifications, [key]: e.target.checked}
                      })}
                    />
                    <span className="toggle-slider"></span>
                    <span className="notification-label">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="preferences-actions">
              <button className="save-preferences-btn">Save Preferences</button>
              <button className="reset-preferences-btn">Reset to Default</button>
            </div>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
