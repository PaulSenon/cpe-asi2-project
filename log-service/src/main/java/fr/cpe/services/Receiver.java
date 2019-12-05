package fr.cpe.services;

import fr.cpe.controller.LogService;
import fr.cpe.dto.LogDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class Receiver {

    @Autowired
    private LogService logService;

    private final Sender sender;

    @JmsListener(destination = "${logs-messaging.queue.name}")
    public void receiveMessage(LogDto data) {
        log.info(data);
        logService.addLog(data);
    }
}
