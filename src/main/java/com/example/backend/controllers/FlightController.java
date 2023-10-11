package com.example.backend.controllers;

import com.example.backend.entities.FlightDTO;
import com.example.backend.services.FlightAuthentication;
import com.example.backend.services.FlightService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
@RequestMapping("/api")
public class FlightController {
    private final FlightService amadeusService;
    private final FlightAuthentication ftest;


    public FlightController(FlightService amadeusService, com.example.backend.services.FlightAuthentication flightAuthentication) {
        this.amadeusService = amadeusService;
        ftest = flightAuthentication;
    }

    @GetMapping("/test")
    public void test(){
        ftest.authenticate();

    }

    @GetMapping("/flightroutes")
    public ArrayList<FlightDTO> getFlightOffers(@RequestParam String departure,
                                                @RequestParam String arrival,
                                                @RequestParam String date,
                                                @RequestParam int noOfBookings,
                                                @RequestParam String flightClass,
                                                @RequestParam String maxPrice) throws JsonProcessingException {
//       return amadeusService.getFlightOffers(departure,arrival,date);
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String json = ow.writeValueAsString(amadeusService.getFlightOffers(departure, arrival, date, noOfBookings, flightClass, maxPrice));
        JSONObject jsonBody = new JSONObject(json);
        return amadeusService.processingFlightData(jsonBody);

    }


}
