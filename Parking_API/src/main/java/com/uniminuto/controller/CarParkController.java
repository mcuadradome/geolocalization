package com.uniminuto.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uniminuto.model.CarPark;
import com.uniminuto.model.Municipality;
import com.uniminuto.object.ResponseVO;
import com.uniminuto.services.ICarParkService;
import com.uniminuto.services.IMunicipalityService;

@RestController
@RequestMapping("/api/carpark")
@CrossOrigin(origins = "*")
public class CarParkController {

	@Autowired
	private ICarParkService carParkService;

	@Autowired
	private IMunicipalityService municipalityService;

	@GetMapping("/countByMunicipalityId/{municipality}")
	public ResponseEntity<ResponseVO> getById(@PathVariable(value = "municipality") Long muniLong) {

		Optional<Municipality> municipality = municipalityService.findById(muniLong);

		if (municipality.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ResponseVO(HttpStatus.NOT_FOUND, "No encontrado", 0L));
		} else {
			ResponseVO responseVO = carParkService.countByMunicipality(municipality.get());

			return ResponseEntity.status(responseVO.getHttpStatus()).body(responseVO);
		}

	}
	
	@PostMapping("/create")
	public ResponseEntity<ResponseVO> create(@RequestBody CarPark carPark){		
		ResponseVO responseVO = carParkService.create(carPark);		
		return ResponseEntity.status(responseVO.getHttpStatus()).body(responseVO);
		
	}

	@GetMapping("/getAllByMunicipality/{municipality}")
	public ResponseEntity<List<CarPark>> getAllByMunicipality(@PathVariable(value = "municipality") Long municipality){
		return ResponseEntity.ok(carParkService.getAll(municipality));
	}
}
