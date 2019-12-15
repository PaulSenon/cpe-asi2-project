package com.cpe.springboot.Controller;

import com.cpe.springboot.Dto.UserDto;
import com.cpe.springboot.Model.CardModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CardModelRepository extends CrudRepository<CardModel, String> {
    List<CardModel> findByUserId(String userId);
}
