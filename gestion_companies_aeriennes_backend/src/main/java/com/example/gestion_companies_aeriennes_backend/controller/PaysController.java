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

import com.example.gestion_companies_aeriennes_backend.model.Pays;
import com.example.gestion_companies_aeriennes_backend.service.PaysService;

@RestController
@RequestMapping("api/pays")
public class PaysController {
private final PaysService paysService;
	
	public PaysController(PaysService paysService) {
		this.paysService=paysService;
	}
	  @GetMapping
	    public List<Pays> getAllPays() {
	        return paysService.getAllPays();
	    }
	  @GetMapping("/{Id}")
	    public Pays getPaysById(@PathVariable Integer Id) {
	        return paysService.getPaysById(Id);
	    }
	  @PostMapping
	  public Pays createPays(@RequestBody Pays pays) {
		  return paysService.createPays(pays);
	  }
	  @PutMapping("/{Id}")
	  public Pays updatePays(@PathVariable Integer Id,@RequestBody Pays pays) {
		  return paysService.updatePays(Id, pays);
	  }
	  @DeleteMapping("/{Id}")
	  public void deletePays(@PathVariable Integer Id) {
		  paysService.deletePays(Id);
		  
	  }

}
