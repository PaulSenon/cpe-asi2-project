package com.cpe.springboot.Controller;

import com.cpe.springboot.Model.StoreModel;
import org.springframework.data.repository.CrudRepository;

public interface StoreRepository extends CrudRepository<StoreModel, String> {
}
