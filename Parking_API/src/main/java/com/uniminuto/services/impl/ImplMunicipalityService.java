package com.uniminuto.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uniminuto.model.Municipality;
import com.uniminuto.repository.MunicipalityRespository;
import com.uniminuto.services.IMunicipalityService;

@Service
public class ImplMunicipalityService implements IMunicipalityService {

	@Autowired
	private MunicipalityRespository municipalityRespository;
	
	@Override
	public Municipality save(Municipality municipality) {
		return municipalityRespository.save(municipality);
	}

	@Override
	public List<Municipality> saveAll(List<Municipality> municipality) {
		return municipalityRespository.saveAllAndFlush(municipality);
	}

	@Override
	public List<Municipality> load() {

		List<Municipality> municipalities = new ArrayList<>();
		municipalities.add(new Municipality("Chocontá", "5.146678", "-73.687044", 2));
		municipalities.add(new Municipality("Tibiritá", "5.051490", "-73.504577", 3));
		municipalities.add(new Municipality("Jerusalén", "4.562677", "-74.695855 ", 2));
		municipalities.add(new Municipality("Ricaurte", "4.282114", "-74.767717", 3));
		municipalities.add(new Municipality("Puerto Salgar", "5.466157", "-74.654130", 2));
		municipalities.add(new Municipality("La Vega", "4.992574", "-74.338211", 3));
		municipalities.add(new Municipality("Útica", "5.185815", "-74.481177 ", 2));
		municipalities.add(new Municipality("Villeta", "5.013166", "-74.470477", 4));
		municipalities.add(new Municipality("Guasca", "4.869582", "-73.874693 ", 3));
		municipalities.add(new Municipality("Choachí", "4.526448", "-73.924819", 2));
		municipalities.add(new Municipality("Pacho", "5.140074", "-74.159068 ", 2));
		municipalities.add(new Municipality("Yacopí", "5.140074", "-74.159068 ", 2));
		municipalities.add(new Municipality("Cogua", "5.066298", "-73.979012", 2));
		municipalities.add(new Municipality("Cota", "4.807059", "-74.109258", 3));
		municipalities.add(new Municipality("Sopó", "4.913516", "-73.941829", 4));
		municipalities.add(new Municipality("Tocancipá", "4.967864", "-73.905176", 4));
		municipalities.add(new Municipality("Facatativá", "4.819769", "-74.366498 ", 4));
		municipalities.add(new Municipality("El Colegio", "4.582815", "-74.443732 ", 2));
		municipalities.add(new Municipality("Simijaca", "5.507497", "-73.848055", 2));
		municipalities.add(new Municipality("Ubaté", "5.310340", "-73.819161", 3));
		municipalities.add(new Municipality("Bogotá D.C. ", "4.677584", "-74.147794", 8));
		
		return municipalityRespository.saveAllAndFlush(municipalities);
			
	}

	@Override
	public List<Municipality> getAll() {
		return municipalityRespository.findAll();
	}

	@Override
	public Optional<Municipality> findById(Long id) {
		return municipalityRespository.findById(id);
	}

}
