package com.example.backend.controllers;

import com.example.backend.entities.WeatherDTO;
import com.example.backend.services.WeatherService;
import org.springframework.web.bind.annotation.*;

@RestController
public class WeatherController {

    private WeatherService service;

    WeatherController(WeatherService service){
        super();
        this.service = service;
    }

    @GetMapping("/weather")
    public WeatherDTO getWeather(@RequestParam double latitude, @RequestParam double longitude){
        return this.service.requestWeather(latitude, longitude);
    }

}
