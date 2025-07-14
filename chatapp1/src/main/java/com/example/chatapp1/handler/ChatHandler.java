package com.example.chatapp1.handler;

import com.example.chatapp1.model.Message;
import com.example.chatapp1.service.MessageService;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class ChatHandler extends TextWebSocketHandler {

    private final MessageService messageService;

    public ChatHandler(MessageService messageService) {
        this.messageService = messageService;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("✅ New client connected: " + session.getId());
        session.sendMessage(new TextMessage("Welcome! Type your message below."));
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        System.out.println("📩 Received: " + payload);

        // Save to DB
        Message savedMessage = messageService.saveMessage(new Message("Client", payload));

        // Echo reply
        String reply = "Echo: " + payload + " 🤖 (stored with ID: " + savedMessage.getId() + ")";
        session.sendMessage(new TextMessage(reply));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("❌ Client disconnected: " + session.getId());
    }
}

