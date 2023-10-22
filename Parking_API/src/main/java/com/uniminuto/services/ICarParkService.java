package com.uniminuto.services;

import java.util.List;

import com.uniminuto.model.CarPark;
import com.uniminuto.model.Municipality;
import com.uniminuto.object.ResponseVO;

public interface ICarParkService {

	ResponseVO create(CarPark carPark);
	ResponseVO countByMunicipality(Municipality municipality);
	List<CarPark> getAll(Long municipality);
	
}
