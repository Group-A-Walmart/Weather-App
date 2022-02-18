package com.example.weatherapp.service;

import com.example.weatherapp.model.Users;
import com.example.weatherapp.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    @Autowired
    UsersRepository usersRepository;

    public void addUser(Users user) {
        usersRepository.save(user);
    }
}
