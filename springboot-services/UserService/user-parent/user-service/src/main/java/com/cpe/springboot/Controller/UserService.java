package com.cpe.springboot.Controller;

import com.cpe.springboot.Client.CardClient;
import com.cpe.springboot.Dto.UserDto;
import com.cpe.springboot.Model.UserModel;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserService  {

    @Autowired
    private UserRepository userRepository;

    private CardClient cardClient = new CardClient();

    public List<UserDto> getAllUsers() {
        List<UserModel> userList = new ArrayList<>();
        userRepository.findAll().forEach(userList::add);

        return this.convertListToDto(userList);
    }

    public UserDto getUser(String id) {
        return userRepository.findById(id).get().toDto();
    }


    public void addUser(UserDto userDto) {
        UserModel user = new UserModel(userDto);
        userRepository.save(user);
        cardClient.giveRandCard(user.getId(), 5);

    }

//    public void updateUser(UserModel user) {
//       userRepository.save(user);
//    }
//
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    public List<UserDto> getUserByLoginPwd(String login, String pwd) {
        List<UserModel> ulist=null;
        ulist=userRepository.findByLoginAndPwd(login,pwd);
        return this.convertListToDto(ulist);
    }

    public void updateMoney(String userId, float somme){
        UserDto user = this.getUser(userId);
//        if(user.isPresent()) {
            float current_money = user.getAccount();
            current_money = current_money + somme;
            user.setAccount(current_money);
            userRepository.save(new UserModel(user));
//        }
    }

    public List<UserDto> convertListToDto(List<UserModel> users){
        List<UserDto> dtos = new ArrayList<>();
        for(UserModel user : users){
            dtos.add(user.toDto());
        }
        return dtos;
    }
}
