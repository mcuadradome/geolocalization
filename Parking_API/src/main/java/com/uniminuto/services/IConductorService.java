package com.uniminuto.services;

import java.util.List;

import com.uniminuto.model.Conductor;
import com.uniminuto.object.ResponseVO;

public interface IConductorService {

	ResponseVO save(Conductor conductor);
	List<Conductor> getAll();
	
}
