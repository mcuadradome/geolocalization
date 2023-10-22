package com.uniminuto.services;

import java.util.List;
import java.util.Optional;

import com.uniminuto.model.Municipality;

public interface IMunicipalityService {

	Municipality save(Municipality municipality);
	List<Municipality> saveAll(List<Municipality> municipality);
	List<Municipality> load();
	List<Municipality> getAll();
	Optional<Municipality> findById(Long municipalityId);
	
}
