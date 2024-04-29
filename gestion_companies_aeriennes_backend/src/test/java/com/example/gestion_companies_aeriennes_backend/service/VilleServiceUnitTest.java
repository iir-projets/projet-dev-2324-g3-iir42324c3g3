package com.example.gestion_companies_aeriennes_backend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
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

import com.example.gestion_companies_aeriennes_backend.DAO.PaysRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.VilleRepository;
import com.example.gestion_companies_aeriennes_backend.DTO.VilleDTO;
import com.example.gestion_companies_aeriennes_backend.model.Pays;
import com.example.gestion_companies_aeriennes_backend.model.Ville;

@ExtendWith(MockitoExtension.class)
public class VilleServiceUnitTest {
	@InjectMocks
	private VilleService villeService;
	@Mock
	private VilleRepository villeRepository;
	@Mock
    private PaysRepository paysRepository;
	
	
	
	
	@Test
	@DisplayName("TestUnit :creation d'une ville")
	 public void createVille() {
		Ville ville = new Ville();
		VilleDTO v1DTO=new VilleDTO();
		v1DTO.setNum(1);
		v1DTO.setLibelle("marrakech");
		v1DTO.setMatricule_pays(1);
		when(paysRepository.findById(v1DTO.getMatricule_pays())).thenReturn(Optional.of(new Pays()));
		when(villeRepository.save(any(Ville.class))).thenReturn(ville);
		
		
		VilleDTO newVille = villeService.createVille(v1DTO);
		
		assertNotNull(newVille);
		assertThat(newVille.getLibelle()).isEqualTo("marrakech");

	}
	@Test
	@DisplayName("TestUnit :récupération des ville")
	 public void getAllVilles() {
		 List<Ville> villes = new ArrayList<>();
	        Ville ville1 = new Ville();
	        Pays p1=new Pays();
	        Pays p2=new Pays();
	        ville1.setNum(1);
	        ville1.setLibelle("Ville 1");
	        ville1.setPays(p1);
	        Ville ville2 = new Ville();
	        ville2.setNum(2);
	        ville2.setLibelle("Ville 2");
	        ville2.setPays(p2);
	        villes.add(ville1);
	        villes.add(ville2);
	        
        
        when(villeRepository.findAll()).thenReturn(villes);

       
        List<VilleDTO> l_villes = villeService.getAllVilles();
		assertNotNull(l_villes);
		assertEquals(2,l_villes.size());
	}
	@Test
	@DisplayName("TestUnit :récupération une ville par Id")
	 public void getVilleById() {
		
	        Ville ville = new Ville();
	        Pays p1=new Pays();
	        ville.setNum(1);
	        ville.setLibelle("Ville 1");
	        ville.setPays(p1);
	      
        
        when(villeRepository.findById(ville.getNum())).thenReturn(Optional.of(ville));

        // Act
        VilleDTO villeDTO = villeService.getVilleById(ville.getNum());
		assertNotNull(villeDTO);
		assertThat(villeDTO.getLibelle()).isEqualTo("Ville 1");
	}
	@Test
	@DisplayName("TestUnit :modification des infos d'une ville")
	 public void updateVille() {
		
		Ville ville = new Ville();
		Pays p1=new Pays();
	        ville.setNum(1);
	        ville.setLibelle("Marrakech");
	        ville.setPays(p1);
		when(villeRepository.findById(anyInt())).thenReturn(Optional.of(ville));
		ville.setLibelle("agadir");
		when(villeRepository.save(any(Ville.class))).thenReturn(ville);
		VilleDTO updated_pays=villeService.updateVille(1,VilleDTO.toDTO(ville));
		assertNotNull(updated_pays);
		assertThat(updated_pays.getLibelle()).isEqualTo("agadir");
		
	}
	@Test
	@DisplayName("TestUnit :suppression d'une ville")
	public void deleteVille() {
		
		Ville ville = new Ville();
		when(villeRepository.findById(anyInt())).thenReturn(Optional.of(ville));
		doNothing().when(villeRepository).delete(any(Ville.class));
		
		villeService.deleteVille(1);
		
		verify(villeRepository,times(1)).delete(ville);

	}
}
