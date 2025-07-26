import React, { useState, useEffect } from 'react';
import './ChatBotStyles.css';

const ChatBot = ({ onReplacementConfirmed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [conversationComplete, setConversationComplete] = useState(false);

  // Initial bot message
  const initialBotMessage = {
    sender: 'bot',
    text: "Before you check out, here are a few ways to make your Amazon cart more sustainable. For the kids backpack, consider switching to one made from recycled materials, like this corduroy kids backpack, which is durable and ships from North America — opting for standard shipping here could cut emissions by over 1 kg. Your surge protector is lightweight, so delaying shipping by a few days and bundling it with other electronics could reduce unnecessary packaging and avoid air freight. For the coffee machine, think about replacing it with a local, eco-friendly French press like the Bodum or SterlingPro — this swap alone could save ~10 kg of CO₂ emissions. Lastly, the storage racks coming from Japan contribute the largest shipping footprint. If possible, choose a similar option fulfilled by a U.S.-based seller to avoid the ~70 kg of emissions tied to international air freight. Bundling and slowing down deliveries across the board can make a big difference — both for your footprint and for Amazon's."
  };

  // Bot response to user agreement
  const botResponseToAgreement = {
    sender: 'bot',
    text: "I have replaced the desired items. Since the surge protector ships from a location close to the newly chosen backpack, I have bundled them together. You may proceed to checkout."
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
    // Keep the input visible
    // setShowInput(false);
    
    // If the user agrees to the suggestions
    if (userInput.toLowerCase().includes('follow') || 
        userInput.toLowerCase().includes('thank') || 
        userInput.toLowerCase().includes('yes')) {
      
      // Add bot response after a delay
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, botResponseToAgreement]);
        setConversationComplete(true);
        
        // Trigger the callback to update the cart items
        setTimeout(() => {
          if (onReplacementConfirmed) {
            onReplacementConfirmed();
          }
        }, 1500);
      }, 1000);
    }
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
          
          {/* Always show the input field, even after conversation is complete */}
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

export default ChatBot;
