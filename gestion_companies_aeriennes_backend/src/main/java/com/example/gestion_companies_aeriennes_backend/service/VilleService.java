package com.example.gestion_companies_aeriennes_backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.gestion_companies_aeriennes_backend.DAO.PaysRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.VilleRepository;
import com.example.gestion_companies_aeriennes_backend.DTO.VilleDTO;
import com.example.gestion_companies_aeriennes_backend.model.Pays;
import com.example.gestion_companies_aeriennes_backend.model.Ville;


@Service
public class VilleService {
	@Autowired
	public final VilleRepository villeRepository;
	@Autowired
	public final PaysRepository paysRepository;
	
	 public VilleService(VilleRepository villeRepository,PaysRepository paysRepository) {
	        this.villeRepository = villeRepository;
	        this.paysRepository=paysRepository;
	    }
	 public List<VilleDTO> getAllVilles(){
		 List<VilleDTO> villeDTO=new ArrayList<>();
		 List<Ville> villes = villeRepository.findAll();
		 if(villes != null) {
			 for(Ville v : villes) {
				 villeDTO.add(VilleDTO.toDTO(v));
			 }
			 return villeDTO;
		 }
		 return null;
		 
	 }
	 public List<VilleDTO> getAllVillesByPays(Integer Id_pays){
		 List<VilleDTO> villeDTO=new ArrayList<>();
		 Pays pays = paysRepository.findById(Id_pays).get();
		 List<Ville> villes = villeRepository.findByPays(pays);
		 if(villes != null && pays != null) {
			 for(Ville v : villes) {
				 villeDTO.add(VilleDTO.toDTO(v));
			 }
			 return villeDTO;
		 }
		 return null;
		 
	 }
	 public VilleDTO getVilleById(Integer Id) {
		 Ville ville = villeRepository.findById(Id).get();
		 VilleDTO villeDTO = VilleDTO.toDTO(ville);
		 if(ville != null) {
			 return villeDTO;
		 }
		 return null;
	 }
	 public Ville toEntity(VilleDTO villeDTO) {
			
			return Ville.builder()
					.num(villeDTO.getNum())
					.libelle(villeDTO.getLibelle())
					.pays(paysRepository.findById(villeDTO.getMatricule_pays()).get())
					.build();

		}
	 @Transactional
	 public VilleDTO createVille(VilleDTO ville) {
		 Optional<Pays> pays=paysRepository.findById(ville.getNum());
		 if(pays != null) {
			  villeRepository.save(this.toEntity(ville)); 
			  return ville;
		 }
		 return null;
		 
	 }
	 @Transactional
	 public VilleDTO updateVille(Integer Id,VilleDTO ville) {
		 Ville ex_ville=villeRepository.findById(Id).get();
		 Optional<Pays> pays=paysRepository.findById(ville.getMatricule_pays());
		 if(pays != null && ex_ville != null) {
			 Ville new_ville=this.toEntity(ville);
			 ex_ville.setLibelle(new_ville.getLibelle());
			 ex_ville.setPays(new_ville.getPays());
			 villeRepository.save(ex_ville);
			 return VilleDTO.toDTO(ex_ville);
		 }
		 return null;
	 }
	 public void deleteVille(Integer Id) {
		 Ville ex_ville=villeRepository.findById(Id).get();
		 if( ex_ville != null) {
			 
			 villeRepository.delete(ex_ville);
		 }
	 }
}
