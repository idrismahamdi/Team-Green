package com.example.backend.services;

import com.example.backend.UserRepo;
import com.example.backend.entities.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

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

    public HashMap<String, Boolean> userLogin(User user, HttpSession session) throws NoSuchAlgorithmException {

        // TODO: Refactor Please.

        HashMap<String, Boolean> returnValue = new HashMap<>();

        try {

            if (user.getUserName().isEmpty() || user.getPassword().isEmpty()) {
                returnValue.put("userLoggedIn", false);
                return returnValue;
            }

            String password = user.getPassword();
            String hashedPassword = toHexString(getSHA("teamGreen" + password));

            try {
                User existingUser = repo.findUserByUserName(user.getUserName());
                if (Objects.equals(user.getUserName(), existingUser.getUserName()) && hashedPassword.equals(existingUser.getPassword())) {
                    returnValue.put("userLoggedIn", true);
                    session.setAttribute("id", existingUser.getId());
                    session.setAttribute("isLoggedIn", true);
                } else {
                    returnValue.put("userLoggedIn", false);
                }
            } catch (Exception e) {
                returnValue.put("userLoggedIn", false);
                return returnValue;
            }


            return returnValue;

        } catch(Exception e) {
            // userName or Password is null
            returnValue.put("userLoggedIn", false);
            return returnValue;
        }
    }

    public boolean userLogout(HttpSession session){

//        RedirectView redirectView = new RedirectView();
//        redirectView.setUrl("http://www.yahoo.com");
//        return redirectView;

        try {
            session.invalidate();
            return true;
        } catch(Exception e) {
            return false;
        }
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
