package com.example.backend.services;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@Service
public class FlightAuthentication {


    public String authenticate () {
      try {
            // Define the URL
            String url = "https://test.api.amadeus.com/v1/security/oauth2/token";

            // Create a URL object
            URL obj = new URL(url);

            // Create an HttpURLConnection object
            HttpURLConnection connection = (HttpURLConnection) obj.openConnection();

            // Set the HTTP Method to POST
            connection.setRequestMethod("POST");

            // Set the request headers
            connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

            // Enable input/output streams for reading/writing data
            connection.setDoOutput(true);

            // Define the request body (data)
            String data = "grant_type=client_credentials&client_id=nFLGVsaRp0QSW35JhuZNni49FmoFknJD&client_secret=ThfXAi3hQfceATiE";

            // Write the data to the output stream
            try (DataOutputStream wr = new DataOutputStream(connection.getOutputStream())) {
                byte[] postData = data.getBytes(StandardCharsets.UTF_8);
                wr.write(postData);
            }

            // Get the response code
          BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
          String inputLine;
          StringBuilder response = new StringBuilder();

          while ((inputLine = in.readLine()) != null) {
              response.append(inputLine);
          }

          in.close();


          JSONObject jsonBody = new JSONObject(response.toString());
            return jsonBody.getString("access_token");




    }catch(Exception e){
          return null;

      }
}}
