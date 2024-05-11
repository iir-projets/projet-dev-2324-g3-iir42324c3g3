package com.example.gestion_companies_aeriennes_backend.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.gestion_companies_aeriennes_backend.DAO.PassagerRepository;
import com.example.gestion_companies_aeriennes_backend.model.Aeroport;
import com.example.gestion_companies_aeriennes_backend.model.Passager;

@ExtendWith(MockitoExtension.class)
public class PassagerServiceUnitTest {
	@InjectMocks
	private PassagerService passagerService;
	
	@Mock
	private PassagerRepository passagerRepository;
	
	@Test
	@DisplayName("TestUnit :creation d'un Passager")
	public void createPassager() {
		  Passager passager = Passager.builder()
		            .cin("123456789")
		            .nom("Chalabi")
		            .prenom("Hossam")
		            .email("hs@gmail.com")
		            .adresse("Socoma, Maroc")
		            .telephone("0123456789")
		            .build();
		  	
		  	
		    when(passagerRepository.save(any(Passager.class))).thenReturn(passager);

		   
		    Passager createdPassager = passagerService.createPassager(passager);

		    assertNotNull(createdPassager);
		    assertEquals("Chalabi", createdPassager.getNom());
		
	}
	@Test
	@DisplayName("TestUnit :récupération  des Passagers")
	public void getAllPassager() {
		 Passager passager1 = Passager.builder()
				 	.cin("123456789")
		            .nom("Chalabi")
		            .prenom("Hossam")
		            .email("hs@gmail.com")
		            .adresse("Socoma, Maroc")
		            .telephone("0123456789")
		            .build();

		    Passager passager2 = Passager.builder()
		    		 .cin("123456789")
			         .nom("Chalabi1")
			         .prenom("Hossam1")
			         .email("hs1@gmail.com")
			         .adresse("Socoma, Maroc")
			         .telephone("0123456789")
		            .build();

		    List<Passager> passagers = new ArrayList<>();
		    passagers.add(passager1);
		    passagers.add(passager2);
		    when(passagerRepository.findAll()).thenReturn(passagers);

		    
		    List<Passager> result = passagerService.getAllPassagers();

		    // Assert
		    assertNotNull(result);
		    assertEquals(2, result.size());
	}
	@Test
	@DisplayName("TestUnit :récupération  de Passager par Id")   
	public void getPassagerById() {
	    String cin = "123456789";
	    Passager passager = Passager.builder()
	            .cin(cin)
	            .nom("Chalabi")
	            .prenom("Hossam")
	            .email("hs@gmail.com")
	            .adresse("Socoma, Maroc")
	            .telephone("0123456789")
	            .build();

	    when(passagerRepository.findById(cin)).thenReturn(Optional.of(passager));

	    Passager result = passagerService.getPassagerById(cin);

	    assertNotNull(result);
	    assertEquals(passager.getCin(), result.getCin());
	    assertEquals(passager.getNom(), result.getNom());
	}
	@Test
	@DisplayName("TestUnit :modification des infos d'un Passager")   
	public void updatePassager() {
		 String cin = "123456789";
		    Passager existingPassager = Passager.builder()
		    		.cin("123456789")
		            .nom("Chalabi")
		            .prenom("Hossam")
		            .email("hs@gmail.com")
		            .adresse("Socoma, Maroc")
		            .telephone("0123456789")
		            .build();

		    Passager updatedPassager = Passager.builder()
		    		 .cin("123456789")
			         .nom("Chalabi1")
			         .prenom("Hossam1")
			         .email("hs1@gmail.com")
			         .adresse("Socoma, Maroc")
			         .telephone("0123456789")
			         .build();

		    when(passagerRepository.findById(cin)).thenReturn(Optional.of(existingPassager));
		    when(passagerRepository.save(existingPassager)).thenReturn(updatedPassager);

		    
		    Passager result = passagerService.updatePassager(cin, updatedPassager);

		    
		    assertNotNull(result);
		    assertEquals("Chalabi1", result.getNom());
		    
	}
	@Test
	@DisplayName("TestUnit :suppression d'un aeroport ")
	 public void deleteAeroport() {

	    String cin = "123456789";
	    Passager passager = Passager.builder()
	            .cin(cin)
	            .cin("123456789")
	            .nom("Chalabi")
	            .prenom("Hossam")
	            .email("hs@gmail.com")
	            .adresse("Socoma, Maroc")
	            .telephone("0123456789")
	            .build();

	    when(passagerRepository.findById(cin)).thenReturn(Optional.of(passager));
	    doNothing().when(passagerRepository).delete(passager);

	    
	    passagerService.deletePassager(cin);

	    
	    verify(passagerRepository, times(1)).findById(cin);
	    verify(passagerRepository, times(1)).delete(passager);
	}
	
}
