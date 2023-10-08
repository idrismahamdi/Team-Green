package com.example.backend.services;

import com.example.backend.UserRepo;
import com.example.backend.entities.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepo repo;

    public UserService(UserRepo repo){
        super();
        this.repo = repo;
    }

    public void createUser(User user){
        User saved = this.repo.save(user);
        //from the front end perspective, do we need this to return anything?
    }

    public User findUserByUserName(String username){
        return this.repo.findUserByUserName(username);
    }

    public List<User> findAllUsers(){
        return this.repo.findAll();
        // not for end users, just for testing
    }

//    public void removeByUserName(String username){
//        this.repo.deleteUserByUserName(username);
//        //this didn't work for some reason, try deleting by id
//    }

    public void removeById (int id){
        this.repo.deleteById(id);
    }
}
