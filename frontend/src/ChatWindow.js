// ChatWindow.js
import React from "react";

function ChatWindow({ messages }) {
  return (
    <div style={styles.chatBox}>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            ...styles.message,
            alignSelf: msg.startsWith("You:")
              ? "flex-end"
              : msg.startsWith("Server:")
              ? "flex-start"
              : "center",
            backgroundColor: msg.startsWith("You:")
              ? "#007bff"
              : msg.startsWith("Server:")
              ? "#28a745"
              : "#f0f0f0",
            color: msg.startsWith("You:") || msg.startsWith("Server:")
              ? "#fff"
              : "#000",
          }}
        >
          {msg}
        </div>
      ))}
    </div>
  );
}

const styles = {
  chatBox: {
    height: "400px",
    overflowY: "auto",
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  message: {
    maxWidth: "70%",
    padding: "10px 14px",
    borderRadius: "20px",
    fontSize: "14px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
};

export default ChatWindow;
