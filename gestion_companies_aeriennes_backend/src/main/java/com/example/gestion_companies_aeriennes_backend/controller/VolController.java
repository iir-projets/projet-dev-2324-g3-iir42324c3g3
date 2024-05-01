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


import com.example.gestion_companies_aeriennes_backend.service.VolService;
import com.example.gestion_companies_aeriennes_backend.DTO.VolDTO;

@RestController
@RequestMapping("api/vols")
public class VolController {
	@Autowired
	private final VolService volService;
	public VolController(VolService volService) {
		this.volService=volService;
	}
	@GetMapping
    public List<VolDTO> getAllVols() {
        return volService.getAllVols();
    }
	 @GetMapping("/{Id}")
	    public VolDTO getVolsById(@PathVariable Integer Id) {
	        return volService.getVolById(Id);
	    }
	 @PostMapping
	  public VolDTO createVol(@RequestBody VolDTO vol) {
		  return volService.createVol(vol);
	  }
	  @PutMapping("/{Id}")
	  public VolDTO updateVol(@PathVariable Integer Id,@RequestBody VolDTO vol) {
		  return volService.updateVol(Id, vol);
	  }
	  @DeleteMapping("/{Id}")
	  public void deleteVol(@PathVariable Integer Id) {
		  volService.deleteVol(Id);
		  System.out.println("Vol supprimer");
	  }
}
