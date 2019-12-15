package com.cpe.springboot.lib;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.support.converter.MessageConversionException;
import org.springframework.jms.support.converter.MessageConverter;
import org.springframework.stereotype.Component;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Session;
import javax.jms.TextMessage;

/**
 * Used to convert JMS messages from/to JSON. Registered in Spring-JMS automatically via auto configuration
 */
@Component
public class JsonMessageConverter implements MessageConverter {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(JsonMessageConverter.class);

    ObjectMapper mapper;

    public JsonMessageConverter() {
        mapper = new ObjectMapper();
    }

    @Override
    public Message toMessage(Object object, Session session)
            throws JMSException {
        LogDto dto = (LogDto) object;
        String payload = null;
        try {
            payload = mapper.writeValueAsString(dto);
            LOGGER.info("outbound json='{}'", payload);
        } catch (JsonProcessingException e) {
            LOGGER.error("error converting form person", e);
        }

        TextMessage message = session.createTextMessage();
        message.setText(payload);

        return message;
    }

    @Override
    public Object fromMessage(Message message) throws JMSException {
        TextMessage textMessage = (TextMessage) message;
        String payload = textMessage.getText();
        LOGGER.info("inbound json='{}'", payload);

        LogDto dto = null;
        try {
            dto = mapper.readValue(payload, LogDto.class);
        } catch (Exception e) {
            LOGGER.error("error converting to person", e);
        }

        return dto;
    }
}