package com.cpe.springboot.Controller;


import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class MessageHistoryService{
    private Map<String, MessageHistoryEntry> history;

    public MessageHistoryService(){
        this.history = new HashMap<>();
    }

    public MessageHistoryEntry ack(String id){
        return history.remove(id);
    }

    public void save(MessageHistoryEntry entry){
        this.history.put(entry.getEnveloppeDto().getId(), entry);
    }
}
