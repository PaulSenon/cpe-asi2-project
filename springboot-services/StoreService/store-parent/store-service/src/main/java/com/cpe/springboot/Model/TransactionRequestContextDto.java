package com.cpe.springboot.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
public class TransactionRequestContextDto implements Serializable {
    @Setter
    @Getter
    private boolean isSell;

}
