package com.cpe.springboot.Controller;

import com.cpe.springboot.Dto.UserDto;
import com.cpe.springboot.Model.UserModel;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserRestController {

    @Autowired
    private UserService userService;

    @RequestMapping("/users")
    private List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping("/user/{id}")
    private UserDto getUser(@PathVariable String id) {
        return userService.getUser(id);
//        Optional<UserDto> ruser;
//        ruser= userService.getUser(id);
//        if(ruser.isPresent()) {
//            return ruser.get();
//        }
//        return null;

    }

    @RequestMapping(method=RequestMethod.POST,value="/user")
    public void addUser(@RequestBody UserDto user) {
        userService.addUser(user);
    }

//    @RequestMapping(method=RequestMethod.PUT,value="/user/{id}")
//    public void updateUser(@RequestBody UserModel user, @PathVariable String id) {
//        user.setId(Integer.valueOf(id));
//        userService.updateUser(user);
//    }

    @RequestMapping(method=RequestMethod.DELETE,value="/user/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }

//    @RequestMapping(method=RequestMethod.GET,value="/auth")
//    private boolean getAllCourses(@RequestParam("login") String login, @RequestParam("pwd") String pwd) {
//        if( userService.getUserByLoginPwd(login,pwd).size() > 0) {
//            return true;
//        }
//        return false;
//    }

    @RequestMapping(method=RequestMethod.PUT,value="/user/{id}/updatemoney}")
    public void updateMoney(@PathVariable String id, @RequestParam float somme) {
        userService.updateMoney(id, somme);
    }


}
