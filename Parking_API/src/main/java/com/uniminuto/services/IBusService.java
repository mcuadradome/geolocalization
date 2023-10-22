package com.uniminuto.services;

import java.util.List;

import com.uniminuto.model.Bus;
import com.uniminuto.object.ResponseVO;

public interface IBusService {
	
	ResponseVO save(Bus bus);
	List<Bus> getAll();
	
	
}
