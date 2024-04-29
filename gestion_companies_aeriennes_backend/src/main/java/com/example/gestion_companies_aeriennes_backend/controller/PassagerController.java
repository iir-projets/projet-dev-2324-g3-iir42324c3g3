package com.example.gestion_companies_aeriennes_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gestion_companies_aeriennes_backend.model.Passager;
import com.example.gestion_companies_aeriennes_backend.service.PassagerService;

@RestController
@RequestMapping("api/Passager")
public class PassagerController {
private final PassagerService passagerService;
	
	public PassagerController(PassagerService passagerService) {
		this.passagerService=passagerService;
	}
	  @GetMapping
	    public List<Passager> getAllPassagers() {
	        return passagerService.getAllPassagers();
	    }
	  @GetMapping("/{Cin}")
	    public Passager getPassagerById(@PathVariable String Cin) {
	        return passagerService.getPassagerById(Cin);
	    }
	  @PostMapping
	  public Passager createPassager(@RequestBody Passager passager) {
		  return passagerService.createPassager(passager);
	  }
	  @PutMapping("/{Cin}")
	  public Passager updatePassager(@PathVariable String Cin,@RequestBody Passager passager) {
		  return passagerService.updatePassager(Cin, passager);
	  }
	  @DeleteMapping("/{Cin}")
	  public void deletePassager(@PathVariable String Cin) {
		  passagerService.deletePassager(Cin);
		  
	  }

}
