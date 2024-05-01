package com.example.gestion_companies_aeriennes_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.gestion_companies_aeriennes_backend.DAO.AvionRepository;
import com.example.gestion_companies_aeriennes_backend.model.Avion;




@Service
public class AvionService {
	
	@Autowired
	public final AvionRepository avionRepository;
	
	 public AvionService(AvionRepository avionRepository) {
	        this.avionRepository = avionRepository;
	    }
	 public List<Avion> getAllAvions(){
		 List<Avion> avion= avionRepository.findAll();
		 if(avion != null) {
			 return avion;
		 }
		 return null;
	 }
	 public Avion getAvionById(Integer Id) {
		 Avion avion= avionRepository.findById(Id).get();
		 if(avion != null) {
			 return avion;
		 }
		 return null;
	 }
	 @Transactional
	 public Avion createAvion(Avion avion) {
		 return avionRepository.save(avion);
		 
	 }
	 @Transactional
	 public Avion updateAvion(Integer Id,Avion avion) {
		 Avion ex_Avion=avionRepository.findById(Id).get();
		 if(ex_Avion != null) {
			 ex_Avion.setNom(avion.getNom());
			 ex_Avion.setCapacite(avion.getCapacite());
			 return avionRepository.save(ex_Avion); 
		 }
		 return null;
		 
	 }
	 public void deleteAvion(Integer Id) {
		 Avion ex_avion=avionRepository.findById(Id).get();
		 avionRepository.delete(ex_avion);
	 }
	 
}
