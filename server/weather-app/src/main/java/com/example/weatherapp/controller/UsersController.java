package com.example.weatherapp.controller;

import com.example.weatherapp.model.Users;
import com.example.weatherapp.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UsersController {

    @Autowired
    UsersService usersService;

    @PostMapping("/users")
    public void addUser(@RequestBody Users user) {
        usersService.addUser(user);
    }

    @GetMapping("/users")
    public Users retrieveUser(@RequestBody Users user) {
        return usersService.retrieveUser(user);
    }
}
