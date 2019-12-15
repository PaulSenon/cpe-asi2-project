package com.cpe.springboot.Controller;

import com.cpe.springboot.Dto.CardDto;
import com.cpe.springboot.Dto.CardReferenceDto;
import com.cpe.springboot.Model.CardModel;
import com.cpe.springboot.Model.CardReferenceModel;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CardReferenceService {
    @Autowired
    private CardRefRepository cardRefRepository;

    public List<CardReferenceDto> getAllCardRef() {
        List<CardReferenceModel> cardRefList = new ArrayList<>();
        cardRefRepository.findAll().forEach(cardRefList::add);
        return this.convertListToDto(cardRefList);
    }

    public CardReferenceDto getRandCardRef() {
        List<CardReferenceDto> cardRefList=getAllCardRef();
        if( cardRefList.size()>0) {
            Random rand=new Random();
            int rindex=rand.nextInt(cardRefList.size()-1);
            return cardRefList.get(rindex);
        }
        return null;
    }

    public List<CardReferenceDto> convertListToDto(List<CardReferenceModel> cardRefs){
        List<CardReferenceDto> dtos = new ArrayList<>();
        for(CardReferenceModel cardRef : cardRefs){
            dtos.add(cardRef.toDto());
        }
        return dtos;
    }
}
