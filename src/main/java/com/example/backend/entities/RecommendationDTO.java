package com.example.backend.entities;

public class RecommendationDTO {

    private String city;

    public RecommendationDTO(String city) {
        this.city = city;
    }

    public RecommendationDTO() {
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
