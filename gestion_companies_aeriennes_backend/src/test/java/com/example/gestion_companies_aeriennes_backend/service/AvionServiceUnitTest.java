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

import com.example.gestion_companies_aeriennes_backend.DAO.AvionRepository;
import com.example.gestion_companies_aeriennes_backend.model.Avion;

@ExtendWith(MockitoExtension.class)
public class AvionServiceUnitTest {

    @InjectMocks
    private AvionService avionService;

    @Mock
    private AvionRepository avionRepository;

    @Test
    @DisplayName("TestUnit : création d'un Avion")
    public void createAvion() {
        Avion avion = Avion.builder()
                .nom("Airbus A320")
                .capacite(180)
                .build();

        when(avionRepository.save(any(Avion.class))).thenReturn(avion);

        Avion createdAvion = avionService.createAvion(avion);

        assertNotNull(createdAvion);
        assertEquals("Airbus A320", createdAvion.getNom());
    }

    @Test
    @DisplayName("TestUnit : récupération des Avions")
    public void getAllAvions() {
        Avion avion1 = Avion.builder()
                .nom("Airbus A320")
                .capacite(180)
                .build();

        Avion avion2 = Avion.builder()
                .nom("Boeing 737")
                .capacite(150)
                .build();

        List<Avion> avions = new ArrayList<>();
        avions.add(avion1);
        avions.add(avion2);

        when(avionRepository.findAll()).thenReturn(avions);

        List<Avion> result = avionService.getAllAvions();

        assertNotNull(result);
        assertEquals(2, result.size());
    }

    @Test
    @DisplayName("TestUnit : récupération d'un Avion par ID")
    public void getAvionById() {
        Integer num = 1;
        Avion avion = Avion.builder()
                .num(num)
                .nom("Airbus A320")
                .capacite(180)
                .build();

        when(avionRepository.findById(num)).thenReturn(Optional.of(avion));

        Avion result = avionService.getAvionById(num);

        assertNotNull(result);
        assertEquals(avion.getNum(), result.getNum());
        assertEquals(avion.getNom(), result.getNom());
    }

    @Test
    @DisplayName("TestUnit : modification des infos d'un Avion")
    public void updateAvion() {
        Integer num = 1;
        Avion existingAvion = Avion.builder()
                .num(num)
                .nom("Airbus A320")
                .capacite(180)
                .build();

        Avion updatedAvion = Avion.builder()
                .num(num)
                .nom("Boeing 737")
                .capacite(150)
                .build();

        when(avionRepository.findById(num)).thenReturn(Optional.of(existingAvion));
        when(avionRepository.save(existingAvion)).thenReturn(updatedAvion);

        Avion result = avionService.updateAvion(num, updatedAvion);

        assertNotNull(result);
        assertEquals("Boeing 737", result.getNom());
    }

    @Test
    @DisplayName("TestUnit : suppression d'un Avion")
    public void deleteAvion() {
        Integer num = 1;
        Avion avion = Avion.builder()
                .num(num)
                .nom("Airbus A320")
                .capacite(180)
                .build();

        when(avionRepository.findById(num)).thenReturn(Optional.of(avion));
        doNothing().when(avionRepository).delete(avion);

        avionService.deleteAvion(num);

        verify(avionRepository, times(1)).findById(num);
        verify(avionRepository, times(1)).delete(avion);
    }
}