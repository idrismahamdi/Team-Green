package com.example.backend.controllers;

import com.example.backend.entities.User;
import com.example.backend.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private UserService service;

    public UserController(UserService service){
        super();
        this.service = service;
    }

    @PostMapping("/createaccount")
    public void addUser (@RequestBody User user){
        this.service.createUser(user);
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
@DeleteMapping("/deleteaccount/{id}")
    public void deleteUser(@PathVariable int id){
        this.service.removeById(id);
    }

    @GetMapping("/health")
    public String health(){
        // health-style checkpoint (no function really, just making sure the connections are working)
        return "Testing for Team Green project!";
    }


}
