package com.example.weatherapp.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@Table(name = "users")
public class Users {

    @Id
    @SequenceGenerator(
            name = "usersSequence",
            sequenceName = "usersSequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "usersSequence"
    )
    @Column
    private long id;

    @Column
    @NotNull
    private String username;

    @Column
    @NotNull
    private String password;

    public Users() {
        setUserFavorites(new HashSet<>());
    }

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JoinTable(
            name = "user_favorites",
            joinColumns = @JoinColumn(name="users_id"),
            inverseJoinColumns = @JoinColumn(name = "favorites_id", nullable = false, updatable = false)
    )
    @ToString.Exclude
    public Set<Favorites> userFavorites;
}
