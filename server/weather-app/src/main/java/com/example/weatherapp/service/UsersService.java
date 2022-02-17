package com.example.weatherapp.service;

import com.example.weatherapp.model.Users;
import com.example.weatherapp.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public void test(String username, String password) {
        usersRepository.save(new Users(username, password));
    }
}
