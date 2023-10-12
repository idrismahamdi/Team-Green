package com.example.backend.services;

import com.example.backend.entities.RecommendationDTO;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import java.io.BufferedReader;
import java.io.IOException;
import java.net.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.io.FileReader;

@Service
public class RecommendService {
    private String accessToken; // Store your access token here
    private final FlightAuthentication refreshKey;

    private final RestTemplate restTemplate;

    public RecommendService(FlightAuthentication refreshKey, RestTemplate restTemplate) {
        this.refreshKey = refreshKey;
        this.restTemplate = restTemplate;
    }


    public static String loadCityDataFromFile( String code) throws IOException {
         Map<String, String> cityCodeMap = new HashMap<>();

        try (BufferedReader br = new BufferedReader(new FileReader(System.getProperty("user.dir") + "/src/main/java/com/example/backend/services/airport.csv"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length >= 4) {
                    cityCodeMap.put(parts[0], parts[3]);

                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(cityCodeMap);
        return cityCodeMap.get(code);

    }



    public Object getRecommendations(String cityCode){
        accessToken = refreshKey.authenticate();
        String url = "https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=" + cityCode;

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

        }}

    public ArrayList<RecommendationDTO> processingRecommendations(JSONObject json) throws IOException {
        JSONArray data = (JSONArray) json.get("data");
        ArrayList<RecommendationDTO> recommendCitysDTO = new ArrayList();
        //cycle through each flight in data object
        for (Object recommendation : data) {

            //create a flight dto for each flight
            RecommendationDTO recommendationdto = new RecommendationDTO();
            JSONObject dataArray = (JSONObject) recommendation;
            recommendationdto.setCity(dataArray.getString("name"));
//            recommendationdto.setPicOfCity(getFirstImageLink(dataArray.getString("name")));
            //populate with data

            recommendCitysDTO.add(recommendationdto);
        }
        return recommendCitysDTO;
    }
//
//    public static String getFirstImageLink(String cityName) throws IOException {
//            String encodedCityName = cityName.replace(" ", "+");
//            String searchUrl = "https://www.bing.com/images/search?q=" + encodedCityName;
//
//            URL url = new URL(searchUrl);
//            URLConnection connection = url.openConnection();
//            connection.setRequestProperty("User-Agent", "Mozilla/5.0");
//
//            try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
//                String line;
//                StringBuilder html = new StringBuilder();
//
//                while ((line = reader.readLine()) != null) {
//                    html.append(line);
//                }
//
//                String imageUrl = extractImageUrlFromHtml(html.toString());
//
//                if (imageUrl != null) {
//                    return imageUrl;
//                }
//            }
//
//            return null;
//    }
//        public static String extractImageUrlFromHtml(String html) {
//            Pattern pattern = Pattern.compile("murl\":\"(https:[^\"]+)");
//            Matcher matcher = pattern.matcher(html);
//
//            if (matcher.find()) {
//                return matcher.group(1).replace("\\", "");
//            }
//
//            return null;
//        }

}


