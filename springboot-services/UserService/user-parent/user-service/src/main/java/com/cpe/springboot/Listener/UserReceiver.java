package com.cpe.springboot.Listener;

import com.cpe.springboot.Controller.UserService;
import com.cpe.springboot.Dto.SetAccountDto;
import com.cpe.springboot.Dto.EnveloppeDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserReceiver {

//    @Autowired
//    private final ObjectMapper objectMapper;

    @Autowired
    private final UserService userService;

    @JmsListener(destination = "${messaging.queue.user.in}")
    public void receiveMessage(EnveloppeDto enveloppeDto) {
        switch (enveloppeDto.getRequest()){

            // when receive a request to update user money amount
            case "updateMoney":
                // check if content if matching expected format
                if (SetAccountDto.class.getName().equals(enveloppeDto.getObjectType())) {
                    SetAccountDto setAccountDto = (SetAccountDto)enveloppeDto.getObject();
                    // call service to fo the needed stuff
                    userService.updateMoney(""+setAccountDto.getUserId(),setAccountDto.getPrice());
                }
                break;

            default:
                break;
        }

        throw new RuntimeException("ERROR : Message Type unknown !");
    }
}
