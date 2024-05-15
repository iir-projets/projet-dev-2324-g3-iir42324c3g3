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

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.gestion_companies_aeriennes_backend.DAO.AeroportRepository;
import com.example.gestion_companies_aeriennes_backend.DTO.AeroDTO;
import com.example.gestion_companies_aeriennes_backend.model.Aeroport;


@ExtendWith(MockitoExtension.class)
public class AeroportServiceUnitTest {
	
	@InjectMocks
	private AeroportService aeroportService;
	@Mock
	private AeroportRepository aeroportRepository;
	@Test
	@DisplayName("TestUnit :creation d'un Aero")
	public void createAeroport() {
	   
	    AeroDTO aeroDTO = AeroDTO.builder()
	            .nom_aeroport("Aéroport de Marrakech")
	            .ville("Paris")
	            .pays("France")
	            .build();

	

	    when(aeroportRepository.save(aeroportService.toEntity(aeroDTO))).thenReturn(aeroportService.toEntity(aeroDTO));

	   
	    AeroDTO result = aeroportService.createAeroport(aeroDTO);

	    assertNotNull(result);
	    assertEquals("Aéroport de Marrakech", result.getNom_aeroport());

	   
	}
	@Test
	@DisplayName("TestUnit :récupération  des Aero")
	public void getAllAeroport() {
	   
		List<Aeroport> aeroports = new ArrayList<>();
	    Aeroport aeroport1 = Aeroport.builder()
	            .num(1)
	            .nom_aeroport("Aéroport de Paris")
	            .ville("Paris")
	            .pays("France")
	            .build();
	    Aeroport aeroport2 = Aeroport.builder()
	            .num(2)
	            .nom_aeroport("Aéroport de Nice")
	            .ville("Nice")
	            .pays("France")
	            .build();
	    aeroports.add(aeroport1);
	    aeroports.add(aeroport2);


	    when(aeroportRepository.findAll()).thenReturn(aeroports);

	    List<AeroDTO> result = aeroportService.getAllAeroports();

	    
	    assertNotNull(result);
	    assertEquals(2, result.size());

	   
	}
	@Test
	@DisplayName("TestUnit :récupération  d'un aeroport par id")
	public void getAeroportById() {
		Integer aeroportId = 1;
	    Aeroport aeroport = Aeroport.builder()
	            .num(aeroportId)
	            .nom_aeroport("Aéroport de Paris")
	            .ville("Marrakch")
	            .pays("Maroc")
	            .build();
	    
	    when(aeroportRepository.findById(aeroportId)).thenReturn(Optional.of(aeroport));

	    
	    AeroDTO result = aeroportService.getAeroportById(aeroportId);

	   
	    assertNotNull(result);
		assertEquals(1,result.getNum());

	}
	@Test
	@DisplayName("TestUnit :modification des infos d'un aeroport ")
	public void updateAeroport() {
		int aeroportId = 1;
	    Aeroport existingAeroport = Aeroport.builder()
	            .num(aeroportId)
	            .nom_aeroport("Aéroport de Marrakech")
	            .ville("Marrakech")
	            .pays("Maroc")
	            .build();

	    AeroDTO aeroDTO = AeroDTO.builder()
	            .nom_aeroport("Aéroport de Agadir")
	            .ville("Agadir")
	            .pays("France")
	            .build();

	    Aeroport updatedAeroport = Aeroport.builder()
	            .num(aeroportId)
	            .nom_aeroport(aeroDTO.getNom_aeroport())
	            .ville(aeroDTO.getVille())
	            .pays(aeroDTO.getPays())
	            .build();

	    when(aeroportRepository.findById(aeroportId)).thenReturn(Optional.of(existingAeroport));
	    when(aeroportRepository.save(any(Aeroport.class))).thenReturn(updatedAeroport);

	    AeroDTO result = aeroportService.updateAeroport(aeroportId, aeroDTO);

	    assertNotNull(result);
	    assertEquals("Agadir", result.getVille());

	}
	@Test
	@DisplayName("TestUnit :suppression d'un aeroport ")
	 public void deleteAeroport() {

		Aeroport aeroport = Aeroport.builder().num(1).build();
	    when(aeroportRepository.findById(1)).thenReturn(Optional.of(aeroport));
	    doNothing().when(aeroportRepository).delete(aeroport);

	    aeroportService.deleteAeroport(1);

	    verify(aeroportRepository, times(1)).findById(1);
	    verify(aeroportRepository, times(1)).delete(aeroport);
	}
}
