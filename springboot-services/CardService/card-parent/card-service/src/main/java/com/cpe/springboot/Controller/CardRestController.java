package com.cpe.springboot.Controller;

import com.cpe.springboot.Dto.CardDto;
import com.cpe.springboot.Model.CardModel;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CardRestController {

    @Autowired
    private CardModelService cardModelService;

//    @RequestMapping("/cards")
//    private List<CardModel> getAllCards() {
//        List<CardModel> cLightList=new ArrayList<>();
//        for(CardModel c:cardModelService.getAllCardModel()){
//            cLightList.add(new CardModel(c));
//        }
//        return cLightList;
//
//    }
//
//    @RequestMapping("/card/{id}")
//    private CardModel getCard(@PathVariable String id) {
//        Optional<CardModel> rcard;
//        rcard= cardModelService.getCard(Integer.valueOf(id));
//        if(rcard.isPresent()) {
//            return new CardModel(rcard.get());
//        }
//        return null;
//
//    }

    @RequestMapping(method= RequestMethod.POST,value="/card")
    public void addCard(@RequestBody CardDto card) {
        cardModelService.addCard(card);
    }

//    @RequestMapping(method=RequestMethod.PUT,value="/card/{id}")
//    public void updateCard(@RequestBody CardModel card, @PathVariable String id) {
//        card.setId(Integer.valueOf(id));
//        cardModelService.updateCard(card);
//    }

//    @RequestMapping(method=RequestMethod.DELETE,value="/card/{id}")
//    public void deleteUser(@PathVariable String id) {
//        cardModelService.deleteCardModel(Integer.valueOf(id));
//    }

    @RequestMapping("/cards_to_sell")
    private List<CardDto> getCardsToSell(String userId) {
        List<CardDto> list=new ArrayList<>();
        for( CardDto c : cardModelService.getAllCardToSell(userId)){
            //CardModel cLight=new CardModel(c);
            //list.add(cLight);
        }
        return list;

    }

    @RequestMapping(method=RequestMethod.PUT,value="/card/{id}")
    public void updateEnergy(@RequestBody CardDto card, @PathVariable int energy) {
        cardModelService.updateEnergy(energy, card);
    }

}
