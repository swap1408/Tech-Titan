package com.example.chatapp1.repository;

import com.example.chatapp1.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}

