package com.cpe.springboot.Dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
public class StoreDto implements Serializable {

    @Getter
    @Setter
    private String id;

    @Getter
    @Setter
    private Date name;

    @Getter
    @Setter
    private String userId;

    @Getter
    @Setter
    private String cardId;

    @Getter
    @Setter
    private float price;
}
