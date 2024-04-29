package com.example.gestion_companies_aeriennes_backend.DTO;



import com.example.gestion_companies_aeriennes_backend.model.Ville;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class VilleDTO {
	private Integer num;
	private String libelle;
	private Integer matricule_pays;
	
	public static VilleDTO toDTO(Ville ville) {
	return VilleDTO.builder()
			.num(ville.getNum())
			.libelle(ville.getLibelle())
			.matricule_pays((ville.getPays()).getMatricule())
			.build();
	}
}
