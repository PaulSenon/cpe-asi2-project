package com.cpe.springboot.Client;

import com.cpe.springboot.Dto.PriceResponseDto;
import com.cpe.springboot.Dto.EnveloppeDto;
import com.cpe.springboot.Services.AbstractSender;

public class StoreClient extends AbstractSender {

    private static final String queue = "com.cpe.springboot.store.in";

    public EnveloppeDto priceResponse(float price){
        PriceResponseDto priceResponseDto = new PriceResponseDto(price);
        EnveloppeDto<PriceResponseDto> enveloppeDto = new EnveloppeDto("doTransaction",priceResponseDto);
        this.sendMessage(queue, enveloppeDto);
        return enveloppeDto;
    }
}
