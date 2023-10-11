package com.example.backend.services;

import com.example.backend.entities.WeatherDTO;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

        public WeatherDTO requestWeather(double latitude, double longitude) {
//            double latitude = location.getLatitude();
//            double longitude = location.getLongitude();
//todo remove this rest template and inject one from config file
            RestTemplate restTemplate = new RestTemplate();
            String weatherUrl
                    = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude +
                    "&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&timezone=GMT&forecast_days=1";

            ResponseEntity<String> response
                    = restTemplate.getForEntity(weatherUrl, String.class);

            JSONObject jsonBody = new JSONObject(response.getBody());
            JSONObject daily = (JSONObject) jsonBody.get("daily");
            JSONArray maxTempArray = (JSONArray) daily.get("temperature_2m_max");
            JSONArray minTempArray = (JSONArray) daily.get("temperature_2m_min");
            JSONArray maxWindspeedArray = (JSONArray) daily.get("windspeed_10m_max");
            JSONArray maxPopArray = (JSONArray) daily.get("precipitation_probability_max");

            double maxTemp = (double) maxTempArray.getDouble(0);
            double minTemp = (double) minTempArray.getDouble(0);
            double maxWindspeed = (double) maxWindspeedArray.getDouble(0);
            int maxPop = (int) maxPopArray.getInt(0);

            WeatherDTO weather = new WeatherDTO(latitude, longitude, maxTemp, minTemp, maxWindspeed, maxPop);

            return weather;
    };
}
