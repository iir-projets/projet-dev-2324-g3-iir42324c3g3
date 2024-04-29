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

import com.example.gestion_companies_aeriennes_backend.model.Avion;
import com.example.gestion_companies_aeriennes_backend.service.AvionService;

@RestController
@RequestMapping("api/avion")
public class AvionController {
	private final AvionService avionService;
	
	public AvionController(AvionService avionService) {
		this.avionService=avionService;
	}
	  @GetMapping
	    public List<Avion> getAllAvions() {
	        return avionService.getAllAvions();
	    }
	  @GetMapping("/{Id}")
	    public Avion getAvionsById(@PathVariable Integer Id) {
	        return avionService.getAvionById(Id);
	    }
	  @PostMapping
	  public Avion createAvion(@RequestBody Avion avion) {
		  return avionService.createAvion(avion);
	  }
	  @PutMapping("/{Id}")
	  public Avion updateAvion(@PathVariable Integer Id,@RequestBody Avion avion) {
		  return avionService.updateAvion(Id, avion);
	  }
	  @DeleteMapping("/{Id}")
	  public void deleteAvion(@PathVariable Integer Id) {
		  avionService.deleteAvion(Id);
		  
	  }
}
