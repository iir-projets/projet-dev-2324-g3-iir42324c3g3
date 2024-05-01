package com.example.gestion_companies_aeriennes_backend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.gestion_companies_aeriennes_backend.DAO.PassagerRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.ReservationRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.VolRepository;
import com.example.gestion_companies_aeriennes_backend.DTO.ReservationDTO;
import com.example.gestion_companies_aeriennes_backend.DTO.VilleDTO;
import com.example.gestion_companies_aeriennes_backend.model.Passager;
import com.example.gestion_companies_aeriennes_backend.model.Reservation;
import com.example.gestion_companies_aeriennes_backend.model.Ville;
import com.example.gestion_companies_aeriennes_backend.model.Vol;

@ExtendWith(MockitoExtension.class)
public class ReservationServiceUnitTest {
	@InjectMocks
	private ReservationService reservationService;
	@Mock
	private ReservationRepository reservationRepository;
	@Mock
	private PassagerRepository passagerRepository ;
	@Mock
	private VolRepository volRepository;
	@Test
	@DisplayName("TestUnit :creation d'une reservation")
	 public void createReservation() {
		ReservationDTO r1DTO=new ReservationDTO();
		r1DTO.setNbr_place_res(2);
		when(passagerRepository.findById(r1DTO.getId_passager())).thenReturn(Optional.of(new Passager()));
		when(volRepository.findById(r1DTO.getId_vol())).thenReturn(Optional.of(new Vol()));
		when(reservationRepository.save(any(Reservation.class))).thenReturn(new Reservation());
		ReservationDTO new_r1 = reservationService.createReservation(r1DTO);
		assertNotNull(new_r1);
		assertThat(new_r1.getNbr_place_res()).isEqualTo(2);
	}
	@Test
	@DisplayName("TestUnit :récupération des réservation")
	 public void getAllReservations() {
		 List<Reservation> reservations = new ArrayList<>();
		 reservations.add(new Reservation());
		 reservations.add(new Reservation());
		 when(reservationRepository.findAll()).thenReturn(reservations);
		 List<ReservationDTO> l_reservations = reservationService.getAllReservations();
		 assertNotNull(l_reservations);
		 assertEquals(2,l_reservations.size());
	}
	@Test
	@DisplayName("TestUnit :récupération d'une réservation par id ")
	 public void getAllReservationById() {
		 Reservation reservation = new Reservation();
		 reservation.setNbr_place_res(4);
		 when(reservationRepository.findById(reservation.getId())).thenReturn(Optional.of(reservation));
		 ReservationDTO reservations = reservationService.getReservationById(reservation.getId());
		 assertNotNull(reservations);
		 assertEquals(4,reservations.getNbr_place_res());
	}
	@Test
	@DisplayName("TestUnit :modification des infos d'une reservation")
	 public void updateReservation() {
		Reservation reservation = new Reservation();
	
		reservation.setId(1);
		reservation.setPassager(new Passager());
		reservation.setVol(new Vol());
		reservation.setNbr_place_res(4);
	when(passagerRepository.findById("1")).thenReturn(Optional.of(new Passager()));
	when(volRepository.findById(1)).thenReturn(Optional.of(new Vol()));
	when(reservationRepository.findById(anyInt())).thenReturn(Optional.of(reservation));
	reservation.setNbr_place_res(1);
	when(reservationRepository.save(any(Reservation.class))).thenReturn(reservation);
	ReservationDTO updated_reservation=reservationService.updateReservation(1,ReservationDTO.toDTO(reservation));
	assertNotNull(updated_reservation);
	assertEquals(1,updated_reservation.getNbr_place_res());
	}
	
	
	

}
