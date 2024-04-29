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

import com.example.gestion_companies_aeriennes_backend.DTO.VilleDTO;
import com.example.gestion_companies_aeriennes_backend.service.VilleService;


@RestController
@RequestMapping("api/Ville")
public class VilleController {

	@Autowired
	private final VilleService villeService;
	public VilleController(VilleService villeService) {
		this.villeService=villeService;
	}
	@GetMapping
    public List<VilleDTO> getAllVilles() {
        return villeService.getAllVilles();
    }
	@GetMapping("/pays/{Id_pays}")
    public List<VilleDTO> getAllVillesByPays(@PathVariable Integer Id_pays) {
        return villeService.getAllVillesByPays(Id_pays);
    }
	 @GetMapping("/{Id}")
	    public VilleDTO getVilleById(@PathVariable Integer Id) {
	        return villeService.getVilleById(Id);
	    }
	 @PostMapping
	  public VilleDTO createVille(@RequestBody VilleDTO ville) {
		  return villeService.createVille(ville);
	  }
	  @PutMapping("/{Id}")
	  public VilleDTO updateVille(@PathVariable Integer Id,@RequestBody VilleDTO ville) {
		  return villeService.updateVille(Id, ville);
	  }
	  @DeleteMapping("/{Id}")
	  public void deleteVille(@PathVariable Integer Id) {
		  villeService.deleteVille(Id);
		  System.out.println("Ville supprimer");
	  }
}
