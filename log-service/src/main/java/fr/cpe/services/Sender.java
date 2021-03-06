package fr.cpe.services;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Data
public class Sender {

    private final JmsTemplate jmsTemplate;

    private static final String QUEUE_KEY = "nodejs-messaging.queue.name";

    private String queue;

    private final Environment environment;

    @PostConstruct
    public void init() {
        queue = environment.getProperty(QUEUE_KEY);
    }

    public void sendMessage(String queue, Object object) {
        // Send a message with a POJO - the template reuse the message converter
        System.out.println("Sending a message.");
        jmsTemplate.convertAndSend(queue, object);
    }
}
