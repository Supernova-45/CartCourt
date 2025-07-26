# 🌱 Sustainable Wishlist Analyzer

A React-based web application that analyzes Amazon wishlist items for environmental impact and provides sustainable alternatives and purchasing guidance.

## 🚀 Quick Start - Launch Locally

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation & Launch Steps

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd sustainable-wishlist-analyzer
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

4. **Open Your Browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload if you make any changes to the code

### 🎯 How to Use the App
1. Click the **"Import Wishlist"** button to load the demo Amazon wishlist
2. Navigate to the **"Search Alternatives"** tab to browse sustainable coffee machines
3. Explore environmental impact analysis and sustainable alternatives
4. Use the "Do You Really Need This?" challenge feature
5. Track your sustainable choices in the Action Summary

---

## Features

### ✨ Core Functionality
- **Import Wishlist**: Click to load and analyze your hardcoded Amazon wishlist
- **Environmental Impact Analysis**: Detailed breakdown of carbon footprint, microplastics, energy usage, water consumption, recyclability, and packaging impact for each item
- **Greener Alternatives**: Multiple sustainable alternatives with carbon reduction calculations and benefit lists
- **"Do You Really Need This?" Challenge**: Interactive assessment with Wait/Swap/Donate options
- **Total Impact Dashboard**: Real-time summary of total cost, emissions, and potential savings

### 📊 Sustainability Metrics
- Carbon footprint calculations (kg CO₂)
- Microplastics assessment
- Energy and water usage analysis
- Recyclability scores
- Packaging impact evaluation
- Sustainability scoring (1-10 scale)

### 🎯 Interactive Features
- **Wait 30 Days**: Helps reduce impulse purchases
- **Swap Alternative**: Choose more sustainable options with detailed benefits
- **Donate Instead**: Redirect purchasing power to meaningful causes
- **Action Tracking**: Live summary of your sustainable choices

## Hardcoded Wishlist Items

The application analyzes 9 real Amazon wishlist items:

1. **Gemmy Inflatable Movie Screen** ($109.80) - High environmental impact
2. **Hongdian Fountain Pen** ($19.98) - Moderate impact, aluminum construction
3. **Muji Gel Pens** ($7.42) - Low cost, international shipping impact
4. **MARCATO Pasta Maker** ($98.79) - Steel construction, manual operation
5. **KitchenAid Hand Blender** ($59.99) - Electric appliance with mixed materials
6. **Aura Digital Picture Frame** ($149.00) - High energy consumption, e-waste
7. **Fujifilm Smartphone Printer** ($95.99) - Electronic device with plastic components
8. **Tapo Smart LED Strip** ($49.99) - Electronic lighting with multiple colors
9. **Victrola Bluetooth Speaker** ($149.99) - Outdoor speaker with solar charging

## Technology Stack

- **React 18.2.0**: Modern React with hooks and functional components
- **CSS3**: Custom styling with responsive design
- **JavaScript ES6+**: Modern JavaScript features
- **Component Architecture**: Modular, reusable components

## Project Structure

```
src/
├── components/
│   ├── Header.js              # Main header component
│   ├── ImportSection.js       # Wishlist import button
│   ├── SummaryDashboard.js    # Metrics summary cards
│   ├── WishlistContainer.js   # Container for all items
│   ├── WishlistItem.js        # Individual item analysis
│   └── ActionSummary.js       # User action tracking
├── data/
│   └── wishlistData.js        # Hardcoded wishlist items with environmental data
├── App.js                     # Main application component
├── App.css                    # Complete styling
└── index.js                   # React DOM rendering
```

## 💻 Development Setup

### Local Development
1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
   
3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** to `http://localhost:3000`

### Available Scripts
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## How to Use

1. **Click "Import Wishlist"** to load the hardcoded Amazon wishlist
2. **View the Summary Dashboard** showing total environmental impact
3. **Explore each item** to see:
   - Detailed environmental impact breakdown
   - Multiple greener alternatives with benefits
   - Sustainability score and usage assessment
4. **Challenge each purchase** using the "Do You Really Need This?" feature
5. **Choose actions**: Wait 30 days, Swap to alternatives, or Donate instead
6. **Track your impact** in the Action Summary section

## Environmental Impact Categories

### 🌍 Carbon Footprint
Calculated in kg CO₂ equivalent, including manufacturing, shipping, and usage

### 🧪 Microplastics
Assessment of plastic pollution potential (High/Medium/Low)

### ⚡ Energy Usage
Power consumption for manufacturing and operation

### 💧 Water Usage
Water consumption in liters for production processes

### ♻️ Recyclability
End-of-life disposal and recycling potential

### 📦 Packaging
Environmental impact of product packaging

## Key Features Deep Dive

### Alternative Selection System
- Multiple alternatives per item with detailed comparisons
- Carbon reduction calculations for each alternative
- Cost comparisons and benefit analyses
- Interactive selection interface

### Smart Challenge System
- Frequency-based usage assessment
- Alternative lifestyle suggestions
- Sustainability scoring with color-coded badges
- Actionable recommendations

### Action Tracking
- Real-time updates of user decisions
- Impact calculations based on actions taken
- Motivational feedback for sustainable choices
- Progress visualization

## Responsive Design

- Mobile-first approach with responsive breakpoints
- Touch-friendly interface for mobile devices
- Optimized layouts for tablets and desktops
- Accessibility features and proper contrast ratios

## Educational Value

This application serves as an educational tool to:
- Raise awareness about consumption's environmental impact
- Provide concrete alternatives to common purchases
- Encourage mindful purchasing decisions
- Demonstrate the cumulative effect of individual choices
- Promote sustainable consumption patterns

## Future Enhancements

Potential features for future development:
- Real Amazon API integration
- User accounts and wishlist saving
- Social sharing of sustainability achievements
- Expanded alternative database
- Machine learning for better impact calculations
- Carbon offset purchasing integration
- Community features and challenges

---

**Built for the Amazon Hackathon 2025** - Making purchasing decisions that matter for our planet 🌍
