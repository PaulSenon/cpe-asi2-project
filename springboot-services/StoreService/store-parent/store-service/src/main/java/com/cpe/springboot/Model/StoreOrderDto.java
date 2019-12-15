package com.cpe.springboot.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
public class StoreOrderDto implements Serializable {

    @Getter
    @Setter
    private String userId;

    @Getter
    @Setter
    private String cardId;
}
