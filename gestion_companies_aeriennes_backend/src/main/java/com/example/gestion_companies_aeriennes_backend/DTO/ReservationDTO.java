package com.example.gestion_companies_aeriennes_backend.DTO;

import com.example.gestion_companies_aeriennes_backend.model.Reservation;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReservationDTO {
	private Integer id;
	private String id_passager;
	private Integer nbr_place_res;
	private double prix_reservation;
	private String statut;
	private Integer id_vol;
	
	public static ReservationDTO toDTO(Reservation reservation) {
		return ReservationDTO.builder()
				.id(reservation.getId())
				.id_passager((reservation.getPassager()).getCin())
				.nbr_place_res(reservation.getNbr_place_res())
				.prix_reservation(reservation.getPrix_reservation())
				.statut(reservation.getStatut())
				.id_vol((reservation.getVol()).getNum())
				.build();
	}
	}
