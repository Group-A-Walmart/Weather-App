package com.example.weatherapp.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@Table(name = "favorites")
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

    public Favorites() {}

    public Favorites(String city, String state) {
        this.city = city;
        this.state = state;
    }

    public long getId() {
        return id;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setState(String state) {
        this.state = state;
    }
}
