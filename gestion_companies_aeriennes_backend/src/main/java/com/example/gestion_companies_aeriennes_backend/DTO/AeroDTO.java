package com.example.gestion_companies_aeriennes_backend.DTO;

import com.example.gestion_companies_aeriennes_backend.model.Aeroport;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AeroDTO {
	private Integer num;
	private String nom_aeroport;
	private String ville;
	private String pays;
	
	public static AeroDTO toDTO(Aeroport aero) {
		return AeroDTO.builder()
				.num(aero.getNum())
				.nom_aeroport(aero.getNom_aeroport())
				.ville(aero.getVille())
				.pays(aero.getPays())
				.build();
		
	}
}
