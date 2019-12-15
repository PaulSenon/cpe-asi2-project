package com.cpe.springboot.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "transactions")
public class StoreModel implements Serializable {

    @Id
    @Getter
    @Setter
    private String id = UUID.randomUUID().toString();

    @Getter
    @Setter
    private Date name = new Date();

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
