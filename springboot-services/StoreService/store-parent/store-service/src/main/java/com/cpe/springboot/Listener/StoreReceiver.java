package com.cpe.springboot.Listener;

import com.cpe.springboot.Controller.MessageHistoryEntry;
import com.cpe.springboot.Controller.MessageHistoryService;
import com.cpe.springboot.Controller.StoreService;
import com.cpe.springboot.Dto.PriceResponseDto;
import com.cpe.springboot.Dto.SetCardOwnerDto;
import com.cpe.springboot.Model.TransactionRequestContextDto;
import com.cpe.springboot.Dto.EnveloppeDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StoreReceiver {

//    private final ObjectMapper objectMapper;

    private final StoreService storeService;

//    @Autowired
    private MessageHistoryService messageHistoryService;

    @JmsListener(destination = "${messaging.queue.store.in}")
    public void receiveMessage(EnveloppeDto enveloppeDto) {
        switch (enveloppeDto.getRequest()){

            // - response to exec en of buy/sell action
            case "doTransaction":
                // check if we receive a priceResponse (absolute card price)
                if (PriceResponseDto.class.getName().equals(enveloppeDto.getObjectType())) {
                    // restore the saved state with the same envelop ID
                    MessageHistoryEntry<TransactionRequestContextDto> context
                            = messageHistoryService.ack(enveloppeDto.getId());
                    // do the needed stuff with info from saved context and received response
                    storeService.doTransaction(
                            ((SetCardOwnerDto) context.getEnveloppeDto().getObject()).getUserId(),
                            ((TransactionRequestContextDto) context.getContext()).isSell(),
                            ((PriceResponseDto) enveloppeDto.getObject()).getPrice()
                    );
                }
                break;

            default:
                break;
        }

        throw new RuntimeException("ERROR : Message Type unknown !");
    }
}