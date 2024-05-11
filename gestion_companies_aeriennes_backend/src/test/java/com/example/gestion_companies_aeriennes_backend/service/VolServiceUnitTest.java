package com.example.gestion_companies_aeriennes_backend.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
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
import com.example.gestion_companies_aeriennes_backend.DAO.AvionRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.VolRepository;
import com.example.gestion_companies_aeriennes_backend.DTO.VolDTO;
import com.example.gestion_companies_aeriennes_backend.model.Aeroport;
import com.example.gestion_companies_aeriennes_backend.model.Avion;
import com.example.gestion_companies_aeriennes_backend.model.Vol;

@ExtendWith(MockitoExtension.class)
public class VolServiceUnitTest {

	@InjectMocks
	private VolService volService;
	@Mock
	private VolRepository volRepository;
	@Mock
	private AeroportRepository aeroportRepository;

	@Mock
	private AvionRepository avionRepository;
	@Test
	@DisplayName("TestUnit :creation d'un Vol")
	 public void createVol() {
		Integer id_aeroport_depart = 1;
		Integer id_aeroport_arrive = 2;
		Integer id_avion = 1;
        VolDTO volDTO = VolDTO.builder()
                .id_aeroport_depart(id_aeroport_depart)
                .id_aeroport_arrive(id_aeroport_arrive)
                .id_avion(id_avion)
                .date_depart(LocalDateTime.now())
                .date_arrive(LocalDateTime.now().plusHours(2))
                .build();
        Aeroport aeroportDepart = Aeroport.builder().num(id_aeroport_depart).build();
        Aeroport aeroportArrive = Aeroport.builder().num(id_aeroport_arrive).build();
        Avion avion = Avion.builder().num(id_avion).build();

        when(aeroportRepository.findById(id_aeroport_depart)).thenReturn(Optional.of(aeroportDepart));
        when(aeroportRepository.findById(id_aeroport_arrive)).thenReturn(Optional.of(aeroportArrive));
        when(avionRepository.findById(id_avion)).thenReturn(Optional.of(avion));
        when(volRepository.save(volService.toEntity(volDTO))).thenReturn(Vol.builder().build());
        
        VolDTO result = volService.createVol(volDTO);
        
        
        assertNotNull(result);
        assertEquals(result.getId_avion(),1);
        
	}
	@Test
	@DisplayName("TestUnit :récupération  des Vols")
	 public void getAllVols() {
		 List<Vol> vols = new ArrayList<>();
		 Aeroport aeroportDepart = Aeroport.builder().num(1).build();
		 Aeroport aeroportArrive = Aeroport.builder().num(2).build();
		 Avion avion = Avion.builder().num(1).build();
		    Vol vol1 = Vol.builder()
		        .aeroport_depart(aeroportDepart)
		        .aeroport_arrive(aeroportArrive)
		        .avion(avion)
		        .build();
		    Vol vol2 = Vol.builder()
		        .aeroport_depart(aeroportDepart)
		        .aeroport_arrive(aeroportArrive)
		        .avion(avion)
		        .build();
		 vols.add(vol1);
		 vols.add(vol2);
		 when(volRepository.findAll()).thenReturn(vols);
		 List<VolDTO> l_vol = volService.getAllVols();
		 assertNotNull(l_vol);
		 assertEquals(2,l_vol.size());
	}
	@Test
	@DisplayName("TestUnit :récupération d'un vol par id ")
	 public void getVolById() {
	        Aeroport aeroportDepart = Aeroport.builder().num(1).build();
	        Aeroport aeroportArrive = Aeroport.builder().num(1).build();
	        Avion avion = Avion.builder().num(1).build();
	        Vol vol = Vol.builder().num(1).aeroport_arrive(aeroportArrive).aeroport_depart(aeroportDepart).avion(avion).build();
			when(volRepository.findById(vol.getNum())).thenReturn(Optional.of(vol));
			VolDTO vols = volService.getVolById(vol.getNum());
			assertNotNull(vols);
			assertEquals(1,vols.getNum());
	}
	
	@Test
	@DisplayName("TestUnit :modification des infos d'un vol")
	 public void updateVol() {
				Aeroport aeroportDepart = Aeroport.builder().num(1).build();
				Aeroport aeroportArrive = Aeroport.builder().num(1).build();
				Avion avion = Avion.builder().num(1).build();
	        Vol existingvol = Vol.builder().num(1).aeroport_arrive(aeroportArrive).aeroport_depart(aeroportDepart).avion(avion).build();
	        
	        VolDTO volDTO = VolDTO.builder()
	                .id_aeroport_depart(aeroportDepart.getNum())
	                .id_aeroport_arrive(aeroportArrive.getNum())
	                .id_avion(2)
	                .date_depart(LocalDateTime.now())
	                .date_arrive(LocalDateTime.now().plusHours(2))
	                .build();
	        
	        Vol updatedVol = Vol.builder()
	                .num(volDTO.getNum())
	                .aeroport_depart(aeroportDepart)
	                .aeroport_arrive(aeroportArrive)
	                .avion(Avion.builder().num(volDTO.getId_avion()).build())
	                .date_depart(volDTO.getDate_depart())
	                .date_arrive(volDTO.getDate_arrive())
	                .build();
	               

	        when(aeroportRepository.findById(volDTO.getId_aeroport_depart())).thenReturn(Optional.of(updatedVol.getAeroport_depart()));
	        when(aeroportRepository.findById(volDTO.getId_aeroport_arrive())).thenReturn(Optional.of(updatedVol.getAeroport_arrive()));
	        when(avionRepository.findById(volDTO.getId_avion())).thenReturn(Optional.of(updatedVol.getAvion()));
	        when(volRepository.findById(existingvol.getNum())).thenReturn(Optional.of(existingvol));
	        when(volRepository.save(any(Vol.class))).thenReturn(updatedVol);
	        
	        VolDTO result = volService.updateVol(existingvol.getNum(),volDTO); 
	        
	        
	        assertNotNull(result);
	        assertEquals(2,result.getId_avion());
	        
		}
	@Test
	@DisplayName("TestUnit :suppression d'un vol ")
	 public void deleteVol() {
		Aeroport aeroportDepart = Aeroport.builder().num(1).build();
	    Aeroport aeroportArrive = Aeroport.builder().num(1).build();
	    Avion avion = Avion.builder().num(1).build();
	    Vol vol = Vol.builder().num(1).aeroport_arrive(aeroportArrive).aeroport_depart(aeroportDepart).avion(avion).build();
	    when(volRepository.findById(1)).thenReturn(Optional.of(vol));
	    doNothing().when(volRepository).delete(vol);

	    volService.deleteVol(1);

	    verify(volRepository, times(1)).findById(1);
	    verify(volRepository, times(1)).delete(vol);
	}
}
	

