package com.cpe.springboot.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
public class CardDto implements Serializable {

    @Getter
    @Setter
    private String id;

    @Getter
    @Setter
    private float energy;

    @Getter
    @Setter
    private float hp;

    @Getter
    @Setter
    private float defence;

    @Getter
    @Setter
    private float attack;

    @Getter
    @Setter
    private float price;

    @Getter
    @Setter
    private String userId;

    @Getter
    @Setter
    private String cardReferenceId;
}
