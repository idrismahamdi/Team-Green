package com.example.backend.controllers;

import com.example.backend.entities.User;
import com.example.backend.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    private UserService service;

//    private SessionConfig sessionConfig = new SessionConfig();

    public UserController(UserService service){
        super();
        this.service = service;
    }

    @PostMapping("/createaccount")
    public Map<String, Boolean> addUser (@RequestBody User user) throws NoSuchAlgorithmException {
        return this.service.createUser(user);
    }

    @PostMapping("/login")
    public HashMap<String, Boolean> userLogin (@RequestBody User user, HttpSession session) throws NoSuchAlgorithmException {
        return this.service.userLogin(user, session);
    }

    @PostMapping("/logout")
    public boolean userLogout (HttpSession session) throws NoSuchAlgorithmException {
        return this.service.userLogout(session);
    }

    @GetMapping("/testsession")
    public Object getSession(HttpSession session){
        return session.getAttribute("id") + " : " + session.getAttribute("isLoggedIn");
    }


    @GetMapping("/account/{username}")
    public User getUser(@PathVariable String username){
        return this.service.findUserByUserName(username);
    }

    @GetMapping("/account/all")
    public List<User> getAllUsers(){
        return this.service.findAllUsers();
        // not for end users, just for testing
    }

//    @DeleteMapping("/deleteaccount/{username}")
//    public void deleteUser(@PathVariable String username){
//        this.service.removeByUserName(username);
//        // didn't work, try by id
//    }
    @DeleteMapping("/deleteaccount/{id}") public void deleteUser(@PathVariable int id){
        this.service.removeById(id);}

    @GetMapping("/health")
    public String health(){
        // health-style checkpoint (no function really, just making sure the connections are working)
        return "Testing for Team Green project!";
    }


}
