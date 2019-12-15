package com.cpe.springboot.Client;

import com.cpe.springboot.Dto.SetAccountDto;
import com.cpe.springboot.Dto.EnveloppeDto;
import com.cpe.springboot.Services.AbstractSender;

public class UserClient extends AbstractSender {
    private static final String queue = "com.cpe.springboot.user.in";

    public void updateMoney(String userId, float price){
        SetAccountDto setCardOwnerDto = new SetAccountDto(userId, price);
        EnveloppeDto<SetAccountDto> enveloppeDto = new EnveloppeDto("setAccount",setCardOwnerDto);
        this.sendMessage(queue, enveloppeDto);
    }
}
