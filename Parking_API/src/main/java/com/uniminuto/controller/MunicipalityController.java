package com.uniminuto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uniminuto.model.Municipality;
import com.uniminuto.services.IMunicipalityService;

@RestController
@RequestMapping("/api/municipality")
@CrossOrigin(origins = "*")
public class MunicipalityController {
	
	
	@Autowired
	private IMunicipalityService municipalityService;
	
	
	@GetMapping("/load")
	public ResponseEntity<List<Municipality>>  load(){
		return ResponseEntity.ok().body(municipalityService.load());
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Municipality>> getMunicipalities(){
		return ResponseEntity.ok().body(municipalityService.getAll());
	}

}
