package com.uniminuto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uniminuto.model.CarPark;
import com.uniminuto.model.Municipality;

public interface CarParkRespository extends JpaRepository<CarPark, Long> {

	
	long countByMunicipalityFk(Municipality municipalityFk);
	List<CarPark> findByMunicipalityFk(Municipality municipalityFk);
	
	
	
}
