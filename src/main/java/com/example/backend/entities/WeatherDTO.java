package com.example.backend.entities;

public class WeatherDTO {
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
    }
