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

import com.example.gestion_companies_aeriennes_backend.DTO.ReservationDTO;
import com.example.gestion_companies_aeriennes_backend.service.ReservationService;

@RestController
@RequestMapping("api/reservation")
public class ReservationController {
private final ReservationService reservationService;
	
	public ReservationController(ReservationService reservationService) {
		this.reservationService=reservationService;
	}
	  @GetMapping
	    public List<ReservationDTO> getAllReservations() {
	        return reservationService.getAllReservations();
	    }
	  @GetMapping("/{Id}")
	    public ReservationDTO getReservationById(@PathVariable Integer Id) {
	        return reservationService.getReservationById(Id);
	    }
	  @PostMapping
	  public ReservationDTO createReservation(@RequestBody ReservationDTO reservation) {
		  return reservationService.createReservation(reservation);
	  }
	  @PutMapping("/{Id}")
	  public ReservationDTO updateReservation(@PathVariable Integer Id,@RequestBody ReservationDTO reservation) {
		  return reservationService.updateReservation(Id, reservation);
	  }
	  @DeleteMapping("/{Id}")
	  public void deleteReservation(@PathVariable Integer Id) {
		  reservationService.deleteReservation(Id);
		  
	  }
}
