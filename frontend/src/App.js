// App.js
import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";
import WorkflowPanel from "./WorkflowPanel";
import Sidebar from "./Sidebar";
import { connectSocket, sendMessage } from "./SocketService";

function App() {
  const [messages, setMessages] = useState([
    "Welcome to PriaccEnterprise.AI Chat!",
  ]);
  const [selectedModule, setSelectedModule] = useState("Chat");

  useEffect(() => {
    connectSocket((incoming) => {
      setMessages((prev) => [...prev, `Server: ${incoming}`]);
    });
  }, []);

  const handleSend = (newMessage) => {
    setMessages((prev) => [...prev, `You: ${newMessage}`]);
    sendMessage(newMessage);
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <Sidebar selected={selectedModule} onSelect={setSelectedModule} />

        <div style={styles.content}>
          <h2 style={styles.header}>PriaccEnterprise.AI – {selectedModule}</h2>

          {selectedModule === "Chat" && (
            <>
              <WorkflowPanel onTrigger={handleSend} />
              <ChatWindow messages={messages} />
              <MessageInput onSend={handleSend} />
            </>
          )}

          {selectedModule !== "Chat" && (
            <div style={styles.placeholder}>
              <p>📊 This is the {selectedModule} dashboard panel.</p>
              <p>Coming soon: Graphs, logs, and stats for {selectedModule}!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    width: "90%",
    maxWidth: "1100px",
    height: "90%",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
  header: {
    marginBottom: "20px",
    color: "#333",
  },
  placeholder: {
    fontSize: "16px",
    color: "#666",
    padding: "20px",
    backgroundColor: "#f0f8ff",
    borderRadius: "10px",
    border: "1px dashed #ccc",
  },
};

export default App;
