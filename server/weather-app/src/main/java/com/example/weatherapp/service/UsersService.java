package com.example.weatherapp.service;

import com.example.weatherapp.model.Users;
import com.example.weatherapp.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {

    @Autowired
    UsersRepository usersRepository;

    public void addUser(Users user) {
        usersRepository.save(user);
    }

    public Users retrieveUser(Users user) {
        List<Users> loginUser = usersRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        return loginUser.get(0);
    }
}
