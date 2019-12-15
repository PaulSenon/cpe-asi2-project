package com.cpe.springboot.lib;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
public class LoggerClient {
    @Autowired
    JmsTemplate jmsTemplate;

    private String sourceName = "monolith";

    @Value("${logs-messaging.queue.name}")
    private String destination;

    public void info(String message){
        this.sendMsg("INFO", message);
    }

    public void warning(String message){
        this.sendMsg("WARNING", message);
    }

    public void error(String message){
        this.sendMsg("ERROR", message);
    }

    public void critical(String message){
        this.sendMsg("CRITICAL", message);
    }

    private void sendMsg(String logType, String message) {
        LogDto dto = new LogDto(logType, this.sourceName, message);
        jmsTemplate.convertAndSend(this.destination,dto);
    }
}
