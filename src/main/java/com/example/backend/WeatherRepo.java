package com.example.backend;

import com.example.backend.entities.WeatherDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherRepo extends JpaRepository <WeatherDTO, Integer> {
}
