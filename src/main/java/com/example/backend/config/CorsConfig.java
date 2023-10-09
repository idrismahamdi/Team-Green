package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*"); // Allow requests from any origin, you may want to restrict this to specific origins in production
        corsConfiguration.addAllowedMethod("GET");
        corsConfiguration.addAllowedMethod("POST");
        corsConfiguration.addAllowedMethod("PUT");
        corsConfiguration.addAllowedMethod("DELETE");
        corsConfiguration.addAllowedHeader("*"); // You may want to restrict this to specific headers

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return new CorsFilter((CorsConfigurationSource) source);
    }
}
