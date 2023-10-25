package com.uniminuto.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.uniminuto.model.CarPark;
import com.uniminuto.model.Municipality;
import com.uniminuto.object.ResponseVO;
import com.uniminuto.repository.CarParkRespository;
import com.uniminuto.services.ICarParkService;
import com.uniminuto.services.IMunicipalityService;

@Service
public class ImplCarParkService implements ICarParkService {

	@Autowired
	private CarParkRespository carParkRespository;
	
	@Autowired
	private IMunicipalityService municipalityService;
	
	@Override
	public ResponseVO create(CarPark carPark) {
		
		ResponseVO responseVO = new ResponseVO();
		
		try {
			
			ResponseVO count = countByMunicipality(carPark.getMunicipalityFk());
			
			if((long) count.getResult() <= carPark.getMunicipalityFk().getCapacity()) {
				
				CarPark oCarPark= carParkRespository.save(carPark);
				
				if(oCarPark != null) {
					responseVO.setHttpStatus(HttpStatus.CREATED);
					responseVO.setMessage("Operacion realizada correctamente");	
					responseVO.setResult(oCarPark);
				}else {
					responseVO.setHttpStatus(HttpStatus.BAD_REQUEST);
					responseVO.setMessage("Error al guardar");
				}
			}else {
				responseVO.setHttpStatus(HttpStatus.BAD_REQUEST);
				responseVO.setMessage("Tamaño excede la capicidad de parqueo");
			}
			
		} catch (Exception e) {
			responseVO.setHttpStatus(HttpStatus.BAD_REQUEST);
			responseVO.setMessage("Error " + e.getMessage());
		}
		
		
		
		return responseVO;
	}

	@Override
	public ResponseVO countByMunicipality(Municipality municipality) {
		long count= carParkRespository.countByMunicipalityFk(municipality);
		return new ResponseVO(HttpStatus.OK, "Respuesta correcta", count);
	}

	@Override
	public List<CarPark> getAll(Long municipalityId) {
		
		Optional<Municipality> municipality = municipalityService.findById(municipalityId);
		
		if(municipality.isEmpty()) {
			return new ArrayList<CarPark>();
		}else {
			return carParkRespository.findByMunicipalityFk(municipality.get());
		}	
	}

}
