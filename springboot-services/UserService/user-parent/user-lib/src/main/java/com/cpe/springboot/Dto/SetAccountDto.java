package com.cpe.springboot.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
public class SetAccountDto implements Serializable {
    @Getter
    @Setter
    private String userId;

    @Getter
    @Setter
    private float price;
}
