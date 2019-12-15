package com.cpe.springboot.Client;

import com.cpe.springboot.Dto.GiveRandCardDto;
import com.cpe.springboot.Dto.SetCardOwnerDto;
import com.cpe.springboot.Dto.EnveloppeDto;
import com.cpe.springboot.Services.AbstractSender;

public class CardClient extends AbstractSender{
    private static final String queue = "com.cpe.springboot.card.in";

    public EnveloppeDto giveRandCard(String userID, int nb){
        GiveRandCardDto giveRandCardDto = new GiveRandCardDto(userID,nb);
        EnveloppeDto<GiveRandCardDto> enveloppeDto = new EnveloppeDto("giveRandCard",giveRandCardDto);
        this.sendMessage(queue, enveloppeDto);
        return enveloppeDto;
    }

    public EnveloppeDto setCardOwner(String userId, String cardId){
        SetCardOwnerDto setCardOwnerDto = new SetCardOwnerDto(userId, cardId);
        EnveloppeDto<SetCardOwnerDto> enveloppeDto = new EnveloppeDto("setCardOwner",setCardOwnerDto);
        this.sendMessage(queue, enveloppeDto);
        return enveloppeDto;
    }
}
