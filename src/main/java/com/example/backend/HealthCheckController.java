package com.example.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {

    @GetMapping("/health")
    public String health(){
        // health-style checkpoint (no function really, just making sure the connections are working)
        return "Testing for Team Green project!";
    }
}
