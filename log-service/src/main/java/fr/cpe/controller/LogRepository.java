package fr.cpe.controller;

import fr.cpe.model.LogModel;
import org.springframework.data.repository.CrudRepository;


public interface LogRepository extends CrudRepository<LogModel, Integer> {

}
