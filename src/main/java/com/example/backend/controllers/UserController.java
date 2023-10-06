package com.example.backend.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping("/createaccount")
    public String health(){
        // health-style checkpoint (no function really, just making sure the connections are working)
        return "Testing for Team Green project!";

    }


}
