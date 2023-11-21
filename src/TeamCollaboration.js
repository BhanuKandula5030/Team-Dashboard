import React, { useState, useEffect } from 'react';

const TeamCollaboration = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  useEffect(() => {
    const storedMessages = localStorage.getItem('teamCollaborationMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('teamCollaborationMessages', JSON.stringify(messages));
  }, [messages]);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, timestamp: new Date() }]);
      setNewMessage('');
    }
  };

  return (
    <div className="team-collaboration container mt-4">
      <h2 className="mb-3">Team Collaboration</h2>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message card mb-2">
            <div className="card-body">
              <p className="card-text">{message.text}</p>
              <small className="text-muted">{message.timestamp.toLocaleString()}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input mt-3">
        <textarea
          className="form-control"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary mt-2" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default TeamCollaboration;