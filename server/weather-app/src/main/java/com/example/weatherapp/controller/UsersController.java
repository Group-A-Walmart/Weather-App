package com.example.weatherapp.controller;

import com.example.weatherapp.model.Users;
import com.example.weatherapp.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {

    @Autowired
    UsersService usersService;

    @PostMapping("/users")
    public void addUser(@RequestBody Users user) {
        usersService.addUser(user);
    }
}
