package com.example.backend;

import com.example.backend.entities.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository <User, Integer> {

    public User findUserByUserName(String username);
    @Transactional
    public void deleteUserByUserName(String username);
}
