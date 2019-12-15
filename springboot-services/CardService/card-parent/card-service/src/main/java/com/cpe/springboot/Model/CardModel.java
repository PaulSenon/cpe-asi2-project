package com.cpe.springboot.Model;

import com.cpe.springboot.Dto.CardDto;
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
@Table(name = "cards")
public class CardModel implements Serializable {

    @Id
    @Column(name = "id")
    @Getter
    @Setter
    private String id = UUID.randomUUID().toString();

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
    @ManyToOne
    @JoinColumn(name = "card_reference")
    private CardReferenceModel cardReference;

    public CardModel(CardDto dto){
        this.id = dto.getId();
        this.energy = dto.getEnergy();
        this.hp = dto.getHp();
        this.defence = dto.getDefence();
        this.attack = dto.getAttack();
        this.price = dto.getPrice();
        this.userId = dto.getUserId();
    }

    public CardDto toDto(){
        CardDto dto = new CardDto();
        dto.setUserId(this.userId);
        dto.setEnergy(this.energy);
        dto.setHp(this.hp);
        dto.setDefence(this.defence);
        dto.setAttack(this.attack);
        dto.setPrice(this.price);
        dto.setUserId(this.userId);
        dto.setCardReferenceId(this.cardReference.getId());
        return dto;
    }
}