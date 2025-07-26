import React, { useState, useEffect } from 'react';
import './ChatBotStyles.css';

const WishlistChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Initial bot message
  const initialBotMessage = {
    sender: 'bot',
    text: "Before you add these to your cart, let's take a look at some alternatives! By replacing the flagged low sustainability items, we can reduce your total carbon footprint from this cart by 25kg. We can reduce it in total by 31.5kg if we replace the moderately low sustainability items as well."
  };

  // Initialize with the bot's first message
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
      setMessages([initialBotMessage]);
    }, 1500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (userInput.trim() === '') return;
    
    // Add user message
    const newUserMessage = { sender: 'user', text: userInput };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setUserInput('');
    
    // Add bot response after a delay
    setTimeout(() => {
      const botResponse = {
        sender: 'bot',
        text: "I've highlighted the items with the highest environmental impact. You can click on each item to see sustainable alternatives."
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <span className="eco-icon">🌿</span> Eco Shopping Assistant
            </div>
            <button className="close-button" onClick={toggleChat}>×</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}
              >
                {message.sender === 'bot' && <div className="bot-avatar">🌿</div>}
                <div className="message-content">{message.text}</div>
              </div>
            ))}
          </div>
          
          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your response..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <span className="eco-icon">🌿</span>
        </button>
      )}
    </div>
  );
};

export default WishlistChatBot;
