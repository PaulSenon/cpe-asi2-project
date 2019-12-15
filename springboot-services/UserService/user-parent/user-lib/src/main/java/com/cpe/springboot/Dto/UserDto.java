package com.cpe.springboot.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
public class UserDto implements Serializable {

    @Setter
    @Getter
    private String id;

    @Setter
    @Getter
    private String login;

    @Setter
    @Getter
    private String pwd;

    @Setter
    @Getter
    private float account;

    @Setter
    @Getter
    private String lastName;

    @Setter
    @Getter
    private String surName;

    @Setter
    @Getter
    private String email;
}
