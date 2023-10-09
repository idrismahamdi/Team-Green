package com.example.backend.services;

import com.example.backend.UserRepo;
import com.example.backend.entities.User;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service
public class UserService {

    private final UserRepo repo;

    public UserService(UserRepo repo){
        super();
        this.repo = repo;
    }

    public void createUser(User user) throws NoSuchAlgorithmException {
        String password = user.getPassword();

        String hashedPassword = toHexString(getSHA("teamGreen" + password));

        user.setPassword(hashedPassword);

        User saved = this.repo.save(user);
        //from the front end perspective, do we need this to return anything?
    }

    public static byte[] getSHA(String input) throws NoSuchAlgorithmException

    {
        // Static getInstance method is called with hashing SHA
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        // digest() method called

        // to calculate message digest of an input

        // and return array of byte

        return md.digest(input.getBytes(StandardCharsets.UTF_8));

    }



    public static String toHexString(byte[] hash)

    {
        // Convert byte array into signum representation
        BigInteger number = new BigInteger(1, hash);

        // Convert message digest into hex value

        StringBuilder hexString = new StringBuilder(number.toString(16));

        // Pad with leading zeros
        while (hexString.length() < 64)

        {
            hexString.insert(0, '0');
        }
        return hexString.toString();

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
