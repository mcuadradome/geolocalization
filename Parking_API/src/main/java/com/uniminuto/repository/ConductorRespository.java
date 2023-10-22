package com.uniminuto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uniminuto.model.Conductor;
import com.uniminuto.model.Municipality;

@Repository
public interface ConductorRespository extends JpaRepository<Conductor, Long> {

}
