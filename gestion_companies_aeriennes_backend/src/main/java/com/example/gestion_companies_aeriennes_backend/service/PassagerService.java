package com.example.gestion_companies_aeriennes_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.gestion_companies_aeriennes_backend.DAO.PassagerRepository;
import com.example.gestion_companies_aeriennes_backend.model.Passager;


@Service
public class PassagerService {

	@Autowired
	public final PassagerRepository passagerRepository;
	
	public PassagerService(PassagerRepository passagerRepository) {
        this.passagerRepository = passagerRepository;
    }
	public List<Passager> getAllPassagers(){
		List<Passager> passagers = passagerRepository.findAll();
		if(passagers !=null) {
			return passagers;
		}
		return null;
	 }
	 public Passager getPassagerById(String Cin) {
		 Passager passager = passagerRepository.findById(Cin).get();
		 if(passager != null) {
				return passager;
			}
		 return null;
	 }
	 @Transactional
	 public Passager createPassager(Passager passager) {
		 return passagerRepository.save(passager);
		 
	 }
	 @Transactional
	 public Passager updatePassager(String Cin,Passager passager) {
		 Passager ex_Passager=passagerRepository.findById(Cin).get();
		 if(ex_Passager != null) {
			 ex_Passager.setCin(passager.getCin());
			 ex_Passager.setNom(passager.getNom());
			 ex_Passager.setPrenom(passager.getPrenom());
			 ex_Passager.setEmail(passager.getEmail());
			 ex_Passager.setTelephone(passager.getTelephone());
			 ex_Passager.setAdresse(passager.getAdresse());
			 return passagerRepository.save(ex_Passager);
		 }
		 return null;
		
	 }
	 public void deletePassager(String Cin) {
		 Passager ex_Passager=passagerRepository.findById(Cin).get();
		 if(ex_Passager != null) {
			 
			 passagerRepository.delete(ex_Passager);
		 }
	 }
	
}
