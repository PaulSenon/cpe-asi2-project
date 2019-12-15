package com.cpe.springboot.Controller;


import com.cpe.springboot.Client.CardClient;
import com.cpe.springboot.Client.UserClient;
import com.cpe.springboot.Model.TransactionRequestContextDto;
import com.cpe.springboot.Dto.EnveloppeDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StoreService {
    @Autowired
    StoreRepository storeRepository;

    @Autowired
    MessageHistoryService messageHistoryService;

    private CardClient cardClient = new CardClient();
    private UserClient userClient = new UserClient();

    /**
     * Async init of the buy action
     * @param userId
     * @param cardId
     */
    public void buyCard(String userId, String cardId) {
        // create envelop with "SetCardOwner" action
        EnveloppeDto cardEnveloppe = cardClient.setCardOwner(userId, cardId);

        // crate a save state to remember what we were doing
        TransactionRequestContextDto context = new TransactionRequestContextDto(false);
        MessageHistoryEntry<TransactionRequestContextDto> historyEntry = new MessageHistoryEntry<>(cardEnveloppe, context);

        // save this state
        messageHistoryService.save(historyEntry);
    }

    /**
     * Async init of sell action
     * @param userId
     * @param cardId
     */
    public void sellCard(String userId, String cardId) {
        // create envelop with "SetCardOwner" action
        EnveloppeDto cardEnveloppe = cardClient.setCardOwner(userId, cardId);

        // crate a save state to remember what we were doing
        TransactionRequestContextDto context = new TransactionRequestContextDto(true);
        MessageHistoryEntry<TransactionRequestContextDto> historyEntry = new MessageHistoryEntry<>(cardEnveloppe, context);

        // save this state
        messageHistoryService.save(historyEntry);
    }

    /**
     * Async end of buy/sell action
     * @param userId
     * @param isSell
     * @param price
     */
    public void doTransaction(String userId, boolean isSell, float price){
        if(isSell){
            userClient.updateMoney(userId, price);
        }else{
            userClient.updateMoney(userId, -price);
        }
    }

}