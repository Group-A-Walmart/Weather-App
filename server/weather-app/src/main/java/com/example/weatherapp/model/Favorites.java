package com.example.weatherapp.entity;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Favorites {

    @Id
    @Column
    private long id;

    @Column
    @NotNull
    private String city;

    @Column
    @NotNull
    private String state;
}
