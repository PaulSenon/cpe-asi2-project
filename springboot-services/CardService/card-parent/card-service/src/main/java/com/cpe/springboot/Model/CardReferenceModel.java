package com.cpe.springboot.Model;

import com.cpe.springboot.Dto.CardReferenceDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "card_references")
public class CardReferenceModel implements Serializable {

    @Id
    @Column(name = "id")
    @Getter
    @Setter
    private String id = UUID.randomUUID().toString();;

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

    public CardReferenceModel(CardReferenceDto dto){
        this.id = dto.getId();
        this.name = dto.getName();
        this.description = dto.getDescription();
        this.family = dto.getFamily();
        this.affinity = dto.getAffinity();
        this.imgUrl = dto.getImgUrl();
        this.smallImgUrl = dto.getSmallImgUrl();
    }

    public CardReferenceDto toDto(){
        CardReferenceDto dto = new CardReferenceDto();
        dto.setId(this.id);
        dto.setName(this.name);
        dto.setDescription(this.description);
        dto.setFamily(this.family);
        dto.setAffinity(this.affinity);
        dto.setImgUrl(this.imgUrl);
        dto.setSmallImgUrl(this.smallImgUrl);
        return dto;
    }

}