package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AdminService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {

	@Autowired
	AdminService as;
	
	@DeleteMapping("/deleteByUId")
	public boolean deleteByUId(@RequestParam("user_id")int user_id)
	{
		as.deleteByUId(user_id);
		return true;
	}
}
