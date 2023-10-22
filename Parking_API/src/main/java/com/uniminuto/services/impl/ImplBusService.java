package com.uniminuto.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.uniminuto.model.Bus;
import com.uniminuto.object.ResponseVO;
import com.uniminuto.repository.BusRespository;
import com.uniminuto.services.IBusService;

@Service
public class ImplBusService implements IBusService {

	@Autowired
	private BusRespository busRespository;

	@Override
	public ResponseVO save(Bus bus) {

		ResponseVO responseVO = new ResponseVO();

		try {
			Bus oBbus = busRespository.save(bus);

			if (oBbus != null) {
				responseVO.setHttpStatus(HttpStatus.CREATED);
				responseVO.setMessage("Bus creado");
				responseVO.setResult(oBbus);
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
	public List<Bus> getAll() {
		return busRespository.findAll();
	}

}
