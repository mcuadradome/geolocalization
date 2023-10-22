package com.uniminuto.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.uniminuto.model.Conductor;
import com.uniminuto.object.ResponseVO;
import com.uniminuto.repository.ConductorRespository;
import com.uniminuto.services.IConductorService;

@Service
public class ImplConductorService implements IConductorService {

	@Autowired
	private ConductorRespository conductorRespository;

	@Override
	public ResponseVO save(Conductor conductor) {

		ResponseVO responseVO = new ResponseVO();

		try {
			conductor = conductorRespository.save(conductor);

			if (conductor.getId() != null) {
				responseVO.setHttpStatus(HttpStatus.CREATED);
				responseVO.setMessage("Conducto creado");
				responseVO.setResult(conductor);
			} else {
				responseVO.setHttpStatus(HttpStatus.BAD_REQUEST);
				responseVO.setMessage("Error al procesar");
			}
		} catch (Exception e) {
			responseVO.setHttpStatus(HttpStatus.BAD_REQUEST);
			responseVO.setMessage("Error al procesar " + e.getMessage());
		}

		return responseVO;
	}

	@Override
	public List<Conductor> getAll() {
		return conductorRespository.findAll();
	}

}
