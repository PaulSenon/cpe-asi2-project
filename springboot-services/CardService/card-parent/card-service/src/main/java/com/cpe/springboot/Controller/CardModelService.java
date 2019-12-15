package com.cpe.springboot.Controller;

import com.cpe.springboot.Dto.CardDto;
import com.cpe.springboot.Dto.UserDto;
import com.cpe.springboot.Model.CardModel;
import com.cpe.springboot.Model.CardReferenceModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class CardModelService {
    private Random rand;

    public CardModelService() {
        this.rand=new Random();
    }

    @Autowired
    private CardModelRepository cardRepository;
    @Autowired
    private CardReferenceService cardReferenceService;

    public List<CardDto> getAllCardModel() {
        List<CardModel> cardList = new ArrayList<>();
        cardRepository.findAll().forEach(cardList::add);

        return convertListToDto(cardList);
    }

    public void addCard(CardDto dto) {
        cardRepository.save(new CardModel(dto));
    }

    public void addCard(CardModel cardModel) {
        cardRepository.save(cardModel);
    }

    public void updateCardRef(CardDto dto) {
        cardRepository.save(new CardModel(dto));

    }
    public void updateCard(CardDto dto) {
        cardRepository.save(new CardModel(dto));
    }

    public CardDto getCard(String id) {
        return cardRepository.findById(id).get().toDto();
    }

    public void deleteCardModel(String id) {
        cardRepository.deleteById(id);
    }

    public void giveRandCard(String userId, int nbr){
        for(int i=0;i<nbr;i++) {
            CardModel currentCard=new CardModel();
            currentCard.setCardReference(new CardReferenceModel(cardReferenceService.getRandCardRef()));
            currentCard.setAttack(rand.nextFloat()*100);
            currentCard.setDefence(rand.nextFloat()*100);
            currentCard.setEnergy(100);
            currentCard.setHp(rand.nextFloat()*100);
            currentCard.setPrice(100 + (rand.nextFloat()*900));
            currentCard.setUserId(userId);
            //save new card before sending for user creation
            this.addCard(currentCard);
        }
    }

    public List<CardDto> getAllCardToSell(String userId){
        return this.convertListToDto(this.cardRepository.findByUserId(userId));
    }

    public void updateEnergy(int energy, CardDto card) {
        float current_energy = card.getEnergy();
        current_energy = current_energy + energy;
        card.setEnergy(current_energy);
        cardRepository.save(new CardModel(card));
    }

    public void setCardOwner(String userId, String cardId){
        CardDto card = this.getCard(cardId);
//        if(card.isPresent()) {
            card.setUserId(userId);
            cardRepository.save(new CardModel(card));
//        }
    }
    public List<CardDto> convertListToDto(List<CardModel> cards){
        List<CardDto> dtos = new ArrayList<>();
        for(CardModel card : cards){
            dtos.add(card.toDto());
        }
        return dtos;
    }
}


