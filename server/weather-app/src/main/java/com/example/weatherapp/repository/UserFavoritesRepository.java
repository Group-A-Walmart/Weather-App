package com.example.weatherapp.repository;

import com.example.weatherapp.model.Favorites;
import com.example.weatherapp.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public class UserFavoritesRepository {

    @Autowired
    private UsersRepository usersRepository;

    @Transactional
    public void addUserFavorites(Users user, Favorites newFav) {
        Favorites favorite = new Favorites();
        favorite.setId(newFav.getId());
        favorite.setCity(newFav.getCity());
        favorite.setState(newFav.getState());
        user.getUserFavorites().add(favorite);
        usersRepository.save(new Users(user.getId(), user.getUsername(), user.getPassword(), user.getUserFavorites()));
    }

}
