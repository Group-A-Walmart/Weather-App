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

    @PostMapping("/userLogin")
    public Users retrieveUser(@RequestBody Users user) {
        try {
            return usersService.retrieveUser(user);
        } catch (Exception e) {
            return new Users(-1, null, null, null);
        }
    }
}
