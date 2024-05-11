package com.example.gestion_companies_aeriennes_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.gestion_companies_aeriennes_backend.DAO.PaysRepository;
import com.example.gestion_companies_aeriennes_backend.model.Pays;

@Service
public class PaysService {
	@Autowired
	public final PaysRepository paysRepository;
	
	 public PaysService(PaysRepository paysRepository) {
	        this.paysRepository = paysRepository;
	    }
	 public List<Pays> getAllPays(){
		 List<Pays> pays= paysRepository.findAll();
		 if(pays != null) {
			 return pays;
		 }
		 return null;
		 
	 }
	 public Pays getPaysById(Integer Id) {
		 Pays pays= paysRepository.findById(Id).get();
		 if(pays != null) {
			 return pays;
		 }
		 return null;
	 }
	 @Transactional
	 public Pays createPays(Pays pays) {
		 return paysRepository.save(pays);
		 
	 }
	 
	 @Transactional
	 public Pays updatePays(Integer Id,Pays pays) {
		 Pays ex_pays=paysRepository.findById(Id).get();
		 if(ex_pays != null) {
			 ex_pays.setLibelle(pays.getLibelle());
			 return paysRepository.save(ex_pays); 
		 }
		 return null;
		
	 }
	 public void deletePays(Integer Id) {
		 Pays ex_pays=paysRepository.findById(Id).get();
		 if(ex_pays != null) {
			 paysRepository.delete(ex_pays);
		 }
		 
	 }

}
