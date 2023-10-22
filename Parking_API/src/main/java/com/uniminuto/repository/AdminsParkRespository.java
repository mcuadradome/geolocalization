package com.uniminuto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uniminuto.model.AdminsPark;
import com.uniminuto.model.Municipality;

@Repository
public interface AdminsParkRespository extends JpaRepository<AdminsPark, Long> {

}
