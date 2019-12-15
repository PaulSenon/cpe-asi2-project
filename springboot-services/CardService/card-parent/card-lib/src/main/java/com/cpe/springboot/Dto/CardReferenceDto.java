package com.cpe.springboot.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
public class CardReferenceDto implements Serializable {

    @Getter
    @Setter
    private String id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    private String family;

    @Getter
    @Setter
    private String affinity;

    @Getter
    @Setter
    private String imgUrl;

    @Getter
    @Setter
    private String smallImgUrl;
}
