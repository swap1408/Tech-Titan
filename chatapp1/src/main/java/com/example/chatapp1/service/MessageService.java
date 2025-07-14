
    package com.example.chatapp1.service;

import com.example.chatapp1.model.Message;
import com.example.chatapp1.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class MessageService {
        private final MessageRepository repository;

        public MessageService(MessageRepository repository) {
            this.repository = repository;
        }

        public Message saveMessage(Message message) {
            return repository.save(message);
        }

        public List<Message> getAllMessages() {
            return repository.findAll();
        }
    }

