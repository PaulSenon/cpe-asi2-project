package com.cpe.springboot.Model;

import com.cpe.springboot.Dto.UserDto;
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
@Table(name = "users")
public class UserModel implements Serializable {

    public UserModel(UserDto dto){
        this.account = dto.getAccount();
        this.email = dto.getEmail();
        this.id = dto.getId();
        this.lastName = dto.getLastName();
        this.login = dto.getLogin();
        this.pwd = dto.getPwd();
        this.surName = dto.getSurName();
    }

    @Id
    @Getter
    @Setter
    private String id = UUID.randomUUID().toString();

    @Getter
    @Setter
    private String login;

    @Getter
    @Setter
    private String pwd;

    @Getter
    @Setter
    private float account;

    @Getter
    @Setter
    private String lastName;

    @Getter
    @Setter
    private String surName;

    @Getter
    @Setter
    private String email;

    public UserDto toDto(){
        UserDto dto = new UserDto();
        dto.setAccount(this.account);
        dto.setEmail(this.email);
        dto.setId(this.id);
        dto.setLastName(this.lastName);
        dto.setLogin(this.login);
        dto.setPwd(this.pwd);
        dto.setSurName(this.surName);
        return dto;
    }
}

