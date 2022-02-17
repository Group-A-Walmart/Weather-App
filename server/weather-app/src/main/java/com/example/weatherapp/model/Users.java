package com.example.weatherapp.model;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Users {

    @Id
    @Column
    private long id;

    @Column
    @NotNull
    private String username;

    @Column
    @NotNull
    private String password;
}
