package com.example.backend.entities;

public class FlightDTO {

    private int id;
    private String duration;
    private String grandtotal;

    private String departureIataCode;
    private String departureAt;
    private String departureTerminal;

    private String arrivalIataCode;
    private String arrivalAt;
    private String arrivalTerminal;

    private int numberOfBookableSeats;
    private String flightClass;

    public FlightDTO(int id, String duration, String grandtotal, String departureIataCode, String departureAt, String departureTerminal, String arrivalIataCode, String arrivalAt, String arrivalTerminal, int numberOfBookableSeats, String flightClass) {
        this.id = id;
        this.duration = duration;
        this.grandtotal = grandtotal;
        this.departureIataCode = departureIataCode;
        this.departureAt = departureAt;
        this.departureTerminal = departureTerminal;
        this.arrivalIataCode = arrivalIataCode;
        this.arrivalAt = arrivalAt;
        this.arrivalTerminal = arrivalTerminal;
        this.numberOfBookableSeats = numberOfBookableSeats;
        this.flightClass = flightClass;
    }

    public FlightDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getGrandtotal() {
        return grandtotal;
    }

    public void setGrandtotal(String grandtotal) {
        this.grandtotal = grandtotal;
    }

    public String getDepartureIataCode() {
        return departureIataCode;
    }

    public void setDepartureIataCode(String departureIataCode) {
        this.departureIataCode = departureIataCode;
    }

    public String getDepartureAt() {
        return departureAt;
    }

    public void setDepartureAt(String departureAt) {
        this.departureAt = departureAt;
    }

    public String getDepartureTerminal() {
        return departureTerminal;
    }

    public void setDepartureTerminal(String departureTerminal) {
        this.departureTerminal = departureTerminal;
    }

    public String getArrivalIataCode() {
        return arrivalIataCode;
    }

    public void setArrivalIataCode(String arrivalIataCode) {
        this.arrivalIataCode = arrivalIataCode;
    }

    public String getArrivalAt() {
        return arrivalAt;
    }

    public void setArrivalAt(String arrivalAt) {
        this.arrivalAt = arrivalAt;
    }

    public String getArrivalTerminal() {
        return arrivalTerminal;
    }

    public void setArrivalTerminal(String arrivalTerminal) {
        this.arrivalTerminal = arrivalTerminal;
    }

    public int getNumberOfBookableSeats() {
        return numberOfBookableSeats;
    }

    public void setNumberOfBookableSeats(int numberOfBookableSeats) {
        this.numberOfBookableSeats = numberOfBookableSeats;
    }

    public String getFlightClass() {
        return flightClass;
    }

    public void setFlightClass(String flightClass) {
        this.flightClass = flightClass;
    }


//data->itineraries
    //Duration: ->duration

    //data->price
    //Duration: ->grandtotal

    //data->itineraries->segments->

    //Departure departure->iataCode
    //Departure Time departure->at
    //Departure Time departure->terminal

    //Arrival Time arrival->at
    //Arrival  arrival->iataCode
    //Arrival Time arrival->terminal

    //data
    //Total seats ->numberOfBooable seats



    // flight class








}
