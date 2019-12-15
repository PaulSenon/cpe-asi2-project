package com.cpe.springboot.Controller;


import com.cpe.springboot.Model.UserModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<UserModel, String> {

    List<UserModel> findByLoginAndPwd(String login,String pwd);

}
