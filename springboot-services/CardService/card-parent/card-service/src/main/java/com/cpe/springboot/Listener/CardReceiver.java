package com.cpe.springboot.Listener;

import com.cpe.springboot.Controller.CardModelService;
import com.cpe.springboot.Dto.GiveRandCardDto;
import com.cpe.springboot.Dto.SetCardOwnerDto;
import com.cpe.springboot.Dto.EnveloppeDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CardReceiver {

    @Autowired
    private final ObjectMapper objectMapper;

    @Autowired
    private final CardModelService cardService;

    @JmsListener(destination = "${messaging.queue.card.in}")
    public void receiveMessage(EnveloppeDto enveloppeDto) {
        switch (enveloppeDto.getRequest()){
            case "giveRandCard":
                if (GiveRandCardDto.class.getName().equals(enveloppeDto.getObjectType())) {
                    GiveRandCardDto giveRandCardDto = (GiveRandCardDto)enveloppeDto.getObject();
                    cardService.giveRandCard(giveRandCardDto.getUserID(), giveRandCardDto.getNbCard());
                }
                break;
            case "setCardOwner":
                if (SetCardOwnerDto.class.getName().equals(enveloppeDto.getObjectType())) {
                    SetCardOwnerDto setCardOwnerDto = (SetCardOwnerDto)enveloppeDto.getObject();
                    cardService.setCardOwner(setCardOwnerDto.getUserId(), setCardOwnerDto.getCardId());
                }
                break;
            default:
                break;
        }

        throw new RuntimeException("ERROR : Message Type unknown !");
    }
}
