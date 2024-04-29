package com.example.gestion_companies_aeriennes_backend.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.gestion_companies_aeriennes_backend.DAO.AeroportRepository;
import com.example.gestion_companies_aeriennes_backend.DTO.AeroDTO;
import com.example.gestion_companies_aeriennes_backend.model.Aeroport;


@Service
public class AeroportService {

	@Autowired
	public final AeroportRepository aeroportRepository;
	
	public AeroportService(AeroportRepository aeroportRepository) {
		this.aeroportRepository=aeroportRepository;
		
	}
	 public List<AeroDTO> getAllAeroports(){
		 List<AeroDTO> aeroDTO=new ArrayList<>();
		 List<Aeroport> aero =  aeroportRepository.findAll();
		 if(aero != null) {
			 for(Aeroport a:aero) {
				 aeroDTO.add(AeroDTO.toDTO(a)); 
			 }
			 return aeroDTO;
			 
		 }
		 return null;
	 }
	 public AeroDTO getAeroportById(Integer Id) {
		 Aeroport aero = aeroportRepository.findById(Id).get();
		 AeroDTO aeroDTO=AeroDTO.toDTO(aero);
		 if(aero != null) {
			 return aeroDTO;
		 }
		 return null;
	 }
	 public Aeroport toEntity(AeroDTO aero) {
			
			return Aeroport.builder()
					.num(aero.getNum())
					.nom_aeroport(aero.getNom_aeroport())
					.ville(aero.getVille())
					.pays(aero.getPays())
					.build();

		}
	 @Transactional
	 public AeroDTO createAeroport(AeroDTO aeroport) {
			  aeroportRepository.save(this.toEntity(aeroport));
			  return aeroport;
		 
	 }
	 @Transactional
	 public AeroDTO updateAeroport(Integer Id,AeroDTO aeroport) {
		 Aeroport ex_Aeroport=aeroportRepository.findById(Id).get();

		 if(ex_Aeroport != null) {
			 Aeroport new_Aeroport=this.toEntity(aeroport);
			 ex_Aeroport.setNom_aeroport(new_Aeroport.getNom_aeroport());
			 ex_Aeroport.setVille(new_Aeroport.getVille());
			 ex_Aeroport.setPays(new_Aeroport.getPays());
			 aeroportRepository.save(ex_Aeroport); 
			 return AeroDTO.toDTO(ex_Aeroport);
			 
		 }
		 return null;
		 
	 }
	 public void deleteAeroport(Integer Id) {
		 Aeroport ex_Aeroport=aeroportRepository.findById(Id).get();
		 if(ex_Aeroport != null ) {
			 aeroportRepository.delete(ex_Aeroport);
		 }
		 
	 }
}
