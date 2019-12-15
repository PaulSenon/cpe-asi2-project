package com.cpe.springboot.Services;

import com.cpe.springboot.Dto.EnveloppeDto;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;

@Log4j2
public abstract class AbstractSender {

    @Autowired
    private JmsTemplate jmsTemplate;

    public void sendMessage(String queue, EnveloppeDto enveloppeDto) {
        jmsTemplate.convertAndSend(queue, enveloppeDto);
    }
}
