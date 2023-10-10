package com.example.backend.controllers;

import com.example.backend.entities.WeatherDTO;
import com.example.backend.services.WeatherService;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
public class WeatherController {

    private WeatherService service;

    WeatherController(WeatherService service){
        super();
        this.service = service;
    }

    @PostMapping("/weather")
    public WeatherDTO getWeather(@RequestBody WeatherDTO location){
        return this.service.requestWeather(location);
    }

}
