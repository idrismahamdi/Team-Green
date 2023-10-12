package com.example.backend.controllers;

import com.example.backend.entities.RecommendationDTO;
import com.example.backend.services.FlightAuthentication;
import com.example.backend.services.RecommendService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;


@RestController
@RequestMapping("/api")
public class RecommendController {
    private final RecommendService amadeusService;
    private final FlightAuthentication ftest;


    public RecommendController(RecommendService amadeusService, com.example.backend.services.FlightAuthentication flightAuthentication) {
        this.amadeusService = amadeusService;
        ftest = flightAuthentication;
    }


    @GetMapping("/recommendations")
    public ArrayList<RecommendationDTO> recommendations(@RequestParam String airportArrivalCode) throws IOException {

        String cityCode =   amadeusService.loadCityDataFromFile(airportArrivalCode);
        System.out.println(cityCode);
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = ow.writeValueAsString(amadeusService.getRecommendations(cityCode));
        JSONObject jsonBody = new JSONObject(json);
        return amadeusService.processingRecommendations(jsonBody);


    }



}
