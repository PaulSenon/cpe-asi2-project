package com.cpe.springboot.Dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.UUID;

@NoArgsConstructor
public class EnveloppeDto<T> implements Serializable {

    @Getter
    @Setter
    private String id;

    @Getter
    @Setter
    private String request;

    @Getter
    @Setter
    private T object;

    @Getter
    @Setter
    private String objectType;


    public EnveloppeDto(String id, String request, T object) {
        this.id = id;
        this.request = request;
        this.setObject(object);
    }


    public EnveloppeDto(String request, T object) {
        this.id = UUID.randomUUID().toString();
        this.request = request;
        this.setObject(object);
    }

    public void setObject(T t) {
        this.object = t;
        if (this.objectType == null) {
            this.setObjectType(t.getClass().getName());
        }
    }

}
