package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Patients;
import com.example.demo.entity.Users;

@Repository
@Transactional
public interface PatientsRepository extends JpaRepository<Patients, Integer> {
	
	
	@Query("select p from Patients p where user_id_=?1")
	public Patients getPatientById(@Param ("user_id_") Users user_id_);
	
	
	
	@Query("select p from Patients p where user_id_ = :user_id")
	public Patients getPatientByUId(@Param("user_id") Users user_id);

}
