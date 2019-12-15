package com.cpe.springboot.Controller;

import com.cpe.springboot.Model.CardReferenceModel;
import org.springframework.data.repository.CrudRepository;

public interface CardRefRepository extends CrudRepository<CardReferenceModel, String> {

}

