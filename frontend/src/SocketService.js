// SocketService.js
let socket;

export const connectSocket = (onMessage) => {
  socket = new WebSocket("ws://localhost:8080/ws");

  socket.onopen = () => {
    console.log("✅ WebSocket connected");
  };

  socket.onmessage = (event) => {
    console.log("📩 Message from server:", event.data);
    onMessage(event.data);
  };

  socket.onclose = () => {
    console.log("❌ WebSocket disconnected");
  };

  socket.onerror = (error) => {
    console.error("⚠️ WebSocket error:", error);
  };
};

export const sendMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(message);
    console.log("📤 Sent:", message);
  } else {
    console.error("WebSocket not connected.");
  }
};
