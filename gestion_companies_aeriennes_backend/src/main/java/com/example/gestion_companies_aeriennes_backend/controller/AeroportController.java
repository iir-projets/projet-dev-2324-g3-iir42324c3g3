package com.example.gestion_companies_aeriennes_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.gestion_companies_aeriennes_backend.service.AeroportService;

import com.example.gestion_companies_aeriennes_backend.DTO.AeroDTO;

@RestController
@RequestMapping("api/aeroport")
public class AeroportController {

	@Autowired
	private final AeroportService aeroportService;
	
	public AeroportController(AeroportService aeroportService) {
		this.aeroportService=aeroportService;
	}
		@GetMapping
	    public List<AeroDTO> getAllAeroports() {
	        return aeroportService.getAllAeroports();
	    }
	  @GetMapping("/{Id}")
	    public AeroDTO AeroportsById(@PathVariable Integer Id) {
	        return aeroportService.getAeroportById(Id);
	    }
	  @PostMapping
	  public AeroDTO createAeroport(@RequestBody AeroDTO aeroport) {
		  return aeroportService.createAeroport(aeroport);
	  }
	  @PutMapping("/{Id}")
	  public AeroDTO updateAvion(@PathVariable Integer Id,@RequestBody AeroDTO aeroport) {
		  return aeroportService.updateAeroport(Id, aeroport);
	  }
	  @DeleteMapping("/{Id}")
	  public void deleteAvion(@PathVariable Integer Id) {
		  aeroportService.deleteAeroport(Id);
		  System.out.println("avion supprimer");
	  }

}
