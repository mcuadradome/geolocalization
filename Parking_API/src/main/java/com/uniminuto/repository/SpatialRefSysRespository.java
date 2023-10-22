package com.uniminuto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uniminuto.model.Municipality;
import com.uniminuto.model.SpatialRefSys;

@Repository
public interface SpatialRefSysRespository extends JpaRepository<SpatialRefSys, Integer> {

}
