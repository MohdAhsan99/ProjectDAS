package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.DummyPatients;
import com.example.demo.entity.Patients;
import com.example.demo.entity.Questions;
import com.example.demo.entity.Roles;
import com.example.demo.entity.Users;
import com.example.demo.repository.PatientsRepository;
import com.example.demo.repository.QuestionRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepo;



@Service
public class PatientService {
	
	@Autowired
	PatientsRepository prepo;;
	
	@Autowired
	RoleRepository rrepo;
	
	@Autowired
	UserRepo urepo;
	
	@Autowired
	QuestionRepository qrepo;

	
	
	public Patients register(DummyPatients p )
	{
		Roles role=new Roles(3,"PAT");
		
		Questions que=new Questions(p.getQuestion_id_());
		
		Users u=new Users(p.getEmail_(),p.getPassword_(),p.getAnswer_(),p.getStatus_(),role,que);     
		
		urepo.save(u);
		
		Patients pt=new Patients(p.getFname_(),p.getLname_(),p.getGender_(),p.getEmail_(),p.getPassword_(),p.getAddress_(),p.getDob_(),p.getContact_(),u);
		
		return prepo.save(pt);	
	}

	
	
	 public Patients getPatientbyUId(int user_id_) {
		 
		 Users u=urepo.findById(user_id_).get();
			
			return prepo.getPatientById(u);
		}
	 
	 public Patients getPatientByPIdd(int patient_id)
		{		
			return prepo.findById(patient_id).get();
		}
	 
	 public Patients getPatientByPId(int patient_id)
		{		
			  Optional<Patients> patientOptional = prepo.findById(patient_id);
			    
			    if (patientOptional.isPresent()) {
			        return patientOptional.get();
			    } else {
			   
			        return null;
			    }
		}
	 
	 public Patients getPatientByUId(int user_id)
		{
			Users u=urepo.findById(user_id).get();  //findById returns optional---use get method to retrieve
			
			return prepo.getPatientByUId(u);
		}
		
		
		
		
		public List<Patients> getAllPatients()
		{
			return prepo.findAll();
		}
		public Long pCount()
		{
			return prepo.count();
		}
		

	
}

