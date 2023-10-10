package com.example.backend.entities;

import com.fasterxml.jackson.databind.util.JSONPObject;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.json.JSONObject;

@Entity
public class WeatherDTO {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    private double latitude;
    private double longitude;
    private double maxTemp;
    private double minTemp;
    private double maxWindspeed;

    public double getMaxTemp() {
        return maxTemp;
    }

    public void setMaxTemp(double maxTemp) {
        this.maxTemp = maxTemp;
    }

    public double getMinTemp() {
        return minTemp;
    }

    public void setMinTemp(double minTemp) {
        this.minTemp = minTemp;
    }

    public double getMaxWindspeed() {
        return maxWindspeed;
    }

    public void setMaxWindspeed(double maxWindspeed) {
        this.maxWindspeed = maxWindspeed;
    }

    public int getMaxPop() {
        return maxPop;
    }

    public void setMaxPop(int maxPop) {
        this.maxPop = maxPop;
    }

    private int maxPop;

    @Override
    public String toString() {
        return "WeatherDTO{" +
                "id=" + id +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", maxTemp=" + maxTemp +
                ", minTemp=" + minTemp +
                ", maxWindspeed=" + maxWindspeed +
                ", maxPop=" + maxPop +
                '}';
    }

    public WeatherDTO(double latitude, double longitude, double maxTemp, double minTemp, double maxWindspeed, int maxPop) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.maxWindspeed = maxWindspeed;
        this.maxPop = maxPop;
    }
//    private DailyWeatherValues daily;

    public WeatherDTO() {
        super();
    }

    public double getLatitude() {
        return latitude;
    }
    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
