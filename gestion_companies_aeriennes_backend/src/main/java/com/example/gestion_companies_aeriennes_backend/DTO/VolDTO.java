package com.example.gestion_companies_aeriennes_backend.DTO;

import java.time.LocalDateTime;

import com.example.gestion_companies_aeriennes_backend.model.Vol;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class VolDTO {
	private Integer num;
	private LocalDateTime date_depart;
	private LocalDateTime date_arrive;
	private Integer id_aeroport_depart;
	private Integer id_aeroport_arrive;
	private Boolean aller_retour;
	private String  type_classe;
	private Integer id_aeroport_escal;
	private LocalDateTime escal_date;
	private Integer id_avion;
	private Double prix;
	
	public static VolDTO toDTO(Vol vol) {
		return VolDTO.builder()
				.num(vol.getNum())
				.date_depart(vol.getDate_depart())
				.date_arrive(vol.getDate_arrive())
				.id_aeroport_depart((vol.getAeroport_depart()).getNum())
				.id_aeroport_arrive((vol.getAeroport_arrive()).getNum())
				.type_classe(vol.getType_classe())
				.aller_retour(vol.getAller_retour())
				.id_aeroport_escal(vol.getId_aeroport_escal())
				.escal_date(vol.getEscal_date())
				.id_avion((vol.getAvion()).getNum())
				.prix(vol.getPrix())
				.build();
	}
}
