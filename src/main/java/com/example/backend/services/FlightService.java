package com.example.backend.services;

import com.example.backend.entities.FlightDTO;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.ArrayList;


@Service
public class FlightService {

    private String accessToken; // Store your access token here
    private final FlightAuthentication refreshKey;

    private final RestTemplate restTemplate;

    public FlightService(FlightAuthentication refreshKey, RestTemplate restTemplate) {
        this.refreshKey = refreshKey;
        this.restTemplate = restTemplate;
    }

    public ArrayList<FlightDTO> processingFlightData(JSONObject json){
        JSONArray data = (JSONArray) json.get("data");
        ArrayList<FlightDTO> flightOffers = new ArrayList();
        //cycle through each flight in data object
        for (Object flight : data) {
            //create a flight dto for each flight
            FlightDTO flightdto = new FlightDTO();
            //populate with data
            JSONObject dataArray = (JSONObject) flight;
            flightdto.setNumberOfBookableSeats(dataArray.getInt("numberOfBookableSeats"));
            JSONArray itineraries =  dataArray.getJSONArray("itineraries");
            JSONObject itinerary = (JSONObject)itineraries.get(0);
            flightdto.setDuration(itinerary.getString("duration"));

            JSONArray segments = itinerary.getJSONArray("segments");
            JSONObject segment = (JSONObject) segments.get(0);

            JSONObject departure = segment.getJSONObject("departure");
            flightdto.setDepartureIataCode(departure.getString("iataCode"));

            try {
                flightdto.setDepartureTerminal(departure.getString("terminal"));
            } catch (Exception e) {
                flightdto.setDepartureTerminal("TBC");
            }
            flightdto.setDepartureAt(departure.getString("at"));

            JSONObject arrival = segment.getJSONObject("arrival");
            flightdto.setArrivalIataCode(arrival.getString("iataCode"));
            try {
                flightdto.setArrivalTerminal(arrival.getString("terminal"));
            } catch (Exception e) {
                flightdto.setArrivalTerminal("TBC");
            }
            flightdto.setArrivalAt(arrival.getString("at"));


            JSONObject price =  dataArray.getJSONObject("price");
            flightdto.setGrandtotal(price.getString("grandTotal"));

            JSONArray travelerPricings =  dataArray.getJSONArray("travelerPricings");
            JSONObject travelerPrice = (JSONObject) travelerPricings.get(0);
            JSONArray fareDetailsBySegment =  travelerPrice.getJSONArray("fareDetailsBySegment");
            JSONObject fareDetailBySegment = (JSONObject) fareDetailsBySegment.get(0);
            flightdto.setFlightClass(fareDetailBySegment.getString("cabin"));
            //add to list
            flightOffers.add(flightdto);

        }
        return flightOffers;
    }
    public Object getFlightOffers(String departure, String arrival, String date, int noOfBookings,
                                  String flightClass,
                                  String maxPrice) {
        accessToken = refreshKey.authenticate();
        String url = "https://test.api.amadeus.com/v2/shopping/flight-offers" +
                "?originLocationCode=" + departure +
                "&destinationLocationCode=" + arrival +
                "&departureDate=" + date +
                "&adults=" + noOfBookings +
                "&travelClass=" + flightClass +
                "&maxPrice=" + maxPrice +
                "&currencyCode=GBP" +
                "&nonStop=true" +
                "&max=10";
        System.out.println(url);
        // Create HttpHeaders with the Authorization header using the access token
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);
        headers.setContentType(MediaType.APPLICATION_JSON);

        RequestEntity<Object> requestEntity = new RequestEntity<>(headers, HttpMethod.GET, URI.create(url));

        try{
            return  restTemplate.exchange(requestEntity, Object.class).getBody();
        } catch (HttpClientErrorException e) {
            throw new RuntimeException("Amadeus API request failed: " + e.getResponseBodyAsString(), e);

    }}}