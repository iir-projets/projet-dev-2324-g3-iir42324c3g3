package com.example.gestion_companies_aeriennes_backend.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.gestion_companies_aeriennes_backend.DAO.PassagerRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.ReservationRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.VolRepository;
import com.example.gestion_companies_aeriennes_backend.DTO.ReservationDTO;
import com.example.gestion_companies_aeriennes_backend.model.Passager;
import com.example.gestion_companies_aeriennes_backend.model.Reservation;
import com.example.gestion_companies_aeriennes_backend.model.Vol;



@Service
public class ReservationService {

	@Autowired
	public final ReservationRepository reservationRepository;
	
	@Autowired
	public final PassagerRepository passagerRepository;
	
	@Autowired
	public final VolRepository volRepository;
	
	
	public ReservationService(ReservationRepository reservationRepository,PassagerRepository passagerRepository,VolRepository volRepository) {
        this.reservationRepository = reservationRepository;
        this.passagerRepository=passagerRepository;
        this.volRepository=volRepository;
        
    }
	public List<ReservationDTO> getAllReservations(){
		 List<ReservationDTO> resDTO=new ArrayList<>();
		 List<Reservation> reservationAll=reservationRepository.findAll();
		 for(Reservation reservation: reservationAll) {
			 resDTO.add(ReservationDTO.toDTO(reservation));
		 }
		 return resDTO;
	 }
	 public ReservationDTO getReservationById(Integer id) {
		 Reservation reservation = reservationRepository.findById(id).get();
		 if(reservation != null) {
			 return ReservationDTO.toDTO(reservation);
		 }
		 return null;
	 }
	 public Reservation toEntity(ReservationDTO reservationDTO) {
			
			return Reservation.builder()
					.id(reservationDTO.getId())
					.passager(passagerRepository.findById(reservationDTO.getId_passager()).get())
					.nbr_place_res(reservationDTO.getNbr_place_res())
					.prix_reservation(reservationDTO.getPrix_reservation())
					.vol(volRepository.findById(reservationDTO.getId_vol()).get())
					.statut(reservationDTO.getStatut())
					.build();

		}
	 @Transactional
	 public ReservationDTO createReservation(ReservationDTO reservationDTO) {
		 Vol vol=volRepository.findById(reservationDTO.getId_vol()).get();
		 Passager passager=passagerRepository.findById(reservationDTO.getId_passager()).get();
		 
		 if( passager != null && vol != null) {
			 
			 Reservation resrv=this.toEntity(reservationDTO);
			 reservationRepository.save(resrv);
			 return reservationDTO;
		 }
		 return null;
		 
	 }
	 @Transactional
	 public ReservationDTO updateReservation(Integer Id,ReservationDTO reservationDTO) {
		 Vol vol=volRepository.findById(reservationDTO.getId_vol()).get();
		 Passager passager=passagerRepository.findById(reservationDTO.getId_passager()).get();
		 Reservation ex_reservation=reservationRepository.findById(Id).get();
		 if(passager != null && vol != null && ex_reservation != null) {
			 Reservation new_reservation=this.toEntity(reservationDTO);
			 ex_reservation.setPassager(passager);
			 ex_reservation.setNbr_place_res(new_reservation.getNbr_place_res());
			 ex_reservation.setPrix_reservation(new_reservation.getPrix_reservation());
			 ex_reservation.setVol(new_reservation.getVol());
			 
			 reservationRepository.save(ex_reservation);
			 
			 return ReservationDTO.toDTO(ex_reservation);
		 }
		 return null;
		 
	 }
	 public void deleteReservation(Integer Id) {
		 Reservation ex_reservation=reservationRepository.findById(Id).get();
		 if(ex_reservation != null) {
			 reservationRepository.deleteById(Id);
		 }
		 
	 }
	
}
