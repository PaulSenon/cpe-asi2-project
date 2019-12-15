package com.cpe.springboot.Controller;

import com.cpe.springboot.Model.StoreOrderDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StoreRestController {

    @Autowired
    private StoreService storeService;

    @RequestMapping(method= RequestMethod.POST,value="/buy")
    private void getAllCards(@RequestBody StoreOrderDto order) {
        storeService.buyCard(order.getUserId(),order.getCardId());

    }

    @RequestMapping(method=RequestMethod.POST,value="/sell")
    private void getCard(@RequestBody StoreOrderDto order) {
        storeService.sellCard(order.getUserId(),order.getCardId());
    }

}