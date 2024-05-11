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

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.gestion_companies_aeriennes_backend.DAO.PaysRepository;
import com.example.gestion_companies_aeriennes_backend.model.Pays;

@ExtendWith(MockitoExtension.class)
public class PaysServiceUnitTest {
	@InjectMocks
	private PaysService paysService;
	@Mock
	private PaysRepository paysRepository;
	
	private Pays pays1=new Pays();
	private Pays pays2= new Pays();
	
	@BeforeEach
	void init() {
		pays1.setMatricule(1);
		pays1.setLibelle("maroc");
		pays2.setMatricule(2);
		pays2.setLibelle("france");
	}
	
	@Test
	@DisplayName("TestUnit :creation d'un pays")
	 public void createPays() {
		
		
		when(paysRepository.save(any(Pays.class))).thenReturn(pays1);
		Pays newPays = paysService.createPays(pays1);
		
		assertNotNull(newPays);
		assertThat(newPays.getLibelle()).isEqualTo("maroc");
		
		
		
	}
	@Test
	@DisplayName("TestUnit :récupération des pays")
	 public void getAllPays() {
		List<Pays> pays=new ArrayList<>();
		pays.add(pays1);
		pays.add(pays2);
		
		when(paysRepository.findAll()).thenReturn(pays);
		List<Pays> l_pays=paysService.getAllPays();
		assertNotNull(l_pays);
		assertEquals(2,l_pays.size());
	}
	@Test
	@DisplayName("TestUnit :récupération un pays par id")
	 public void getPaysById() {

		when(paysRepository.findById(anyInt())).thenReturn(Optional.of(pays1));
		Pays ex_pays=paysService.getPaysById(1);
		assertNotNull(ex_pays);
		assertThat(ex_pays.getMatricule()).isEqualTo(1);
	}
	@Test
	@DisplayName("TestUnit :modification des infos d'un pays")
	 public void updatePays() {
		
		

		when(paysRepository.findById(anyInt())).thenReturn(Optional.of(pays1));
		pays1.setLibelle("france");
		when(paysRepository.save(any(Pays.class))).thenReturn(pays1);
		Pays updated_pays=paysService.updatePays(1,pays1);
		assertNotNull(updated_pays);
		assertThat(updated_pays.getLibelle()).isEqualTo("france");
	}
	@Test
	@DisplayName("TestUnit :suppression d'un pays")
	public void deletePays() {
		
		
		when(paysRepository.findById(anyInt())).thenReturn(Optional.of(pays1));
		doNothing().when(paysRepository).delete(any(Pays.class));
		
		paysService.deletePays(1);
		
		verify(paysRepository,times(1)).delete(pays1);

	}
	
}
