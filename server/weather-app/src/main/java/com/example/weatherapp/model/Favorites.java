package com.example.weatherapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "favorites")
public class Favorites {

    @Id
    @SequenceGenerator(
            sequenceName = "favoritesGenerator",
            allocationSize = 1,
            name = "favoritesGenerator"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "favoritesGenerator"
    )
    @Column
    private long id;

    @Column
    @NotNull
    private String city;

    @Column
    @NotNull
    private String state;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "userFavorites")
    @JsonBackReference
    @ToString.Exclude
    Set<Users> users;
}
