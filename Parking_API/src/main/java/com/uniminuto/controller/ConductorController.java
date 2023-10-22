package com.uniminuto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uniminuto.model.Conductor;
import com.uniminuto.object.ResponseVO;
import com.uniminuto.services.IConductorService;

@RestController
@RequestMapping("/api/conductor")
@CrossOrigin(origins = "*")
public class ConductorController {

	@Autowired
	private IConductorService conductorService;
	
	@PostMapping()
	public ResponseEntity<ResponseVO> save(@RequestBody Conductor conductor){
		ResponseVO responseVO = conductorService.save(conductor);
		return ResponseEntity.status(responseVO.getHttpStatus()).body(responseVO);
		
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Conductor>> getAll(){
		return ResponseEntity.ok().body(conductorService.getAll());
	}
	
	
	
	
}
