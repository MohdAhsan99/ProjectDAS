package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;
@ComponentScan(basePackages = "com.example.demo.*")
@RestController
@SpringBootApplication
public class DocoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DocoApplication.class, args);
	}

}
