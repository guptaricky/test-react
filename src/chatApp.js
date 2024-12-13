import React, { useState, useEffect } from "react";

function MessagingApp() {
  const [conversations, setConversations] = useState([
    { id: 1, name: "John Doe", messages: [] },
    { id: 2, name: "Jane Smith", messages: [] },
  ]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  // Simulate receiving new messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedConversation) {
        const randomMessage = `Message ${Math.floor(Math.random() * 100)}`;
        addMessageToConversation(selectedConversation.id, randomMessage, "Other");
      }
    }, 3000); // New message every 3 seconds

    return () => clearInterval(interval);
  }, [selectedConversation]);

  // Add a message to a specific conversation
  const addMessageToConversation = (conversationId, text, sender) => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? {
              ...conv,
              messages: [
                ...conv.messages,
                { text, sender, timestamp: new Date().toLocaleTimeString() },
              ],
            }
          : conv
      )
    );
  };

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      addMessageToConversation(selectedConversation.id, newMessage, "You");
      setNewMessage("");
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Conversation List */}
      <div>
        <h3>Conversations</h3>
        <ul>
          {conversations.map((conv) => (
            <li
              key={conv.id}
              style={{
                cursor: "pointer",
                fontWeight: selectedConversation?.id === conv.id ? "bold" : "normal",
              }}
              onClick={() => setSelectedConversation(conv)}
            >
              {conv.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div style={{ flex: 1 }}>
        {selectedConversation ? (
          <>
            <h3>Chat with {selectedConversation.name}</h3>
            <div
              style={{
                border: "1px solid #ccc",
                height: "300px",
                overflowY: "auto",
                padding: "10px",
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              {selectedConversation.messages
                .slice()
                .reverse()
                .map((msg, index) => (
                  <p key={index} style={{ textAlign: msg.sender === "You" ? "right" : "left" }}>
                    <strong>{msg.sender}:</strong> {msg.text} <em>({msg.timestamp})</em>
                  </p>
                ))}
            </div>
            <div style={{ marginTop: "10px" }}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                style={{ width: "80%" }}
              />
              <button onClick={handleSendMessage} style={{ marginLeft: "10px" }}>
                Send
              </button>
            </div>
          </>
        ) : (
          <p>Select a conversation to view messages.</p>
        )}
      </div>
    </div>
  );
}

export default MessagingApp;
