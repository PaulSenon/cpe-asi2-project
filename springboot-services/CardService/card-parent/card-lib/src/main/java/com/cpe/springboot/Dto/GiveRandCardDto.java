package com.cpe.springboot.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
public class GiveRandCardDto implements Serializable {
    @Getter
    @Setter
    private String userID;

    @Getter
    @Setter
    private int nbCard;

}
