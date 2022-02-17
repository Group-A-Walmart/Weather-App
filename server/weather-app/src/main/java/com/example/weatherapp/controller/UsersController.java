package com.example.weatherapp.controller;

import com.example.weatherapp.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsersController {

    @Autowired
    private UsersService usersService;

    @GetMapping("test")
    public String test() {
        usersService.test("username", "password");
        return "test";
    }
}
