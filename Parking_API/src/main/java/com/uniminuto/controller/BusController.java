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

import com.uniminuto.model.Bus;
import com.uniminuto.model.Municipality;
import com.uniminuto.object.ResponseVO;
import com.uniminuto.services.IBusService;

@RestController
@RequestMapping("/api/bus")
@CrossOrigin(origins = "*")
public class BusController {

	@Autowired
	private IBusService busService;
	
	@PostMapping()
	public ResponseEntity<ResponseVO> save(@RequestBody Bus bus){
		ResponseVO responseVO = busService.save(bus);
		return ResponseEntity.status(responseVO.getHttpStatus()).body(responseVO);
		
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Bus>> getAll(){
		return ResponseEntity.ok().body(busService.getAll());
	}
	
	
	
}
