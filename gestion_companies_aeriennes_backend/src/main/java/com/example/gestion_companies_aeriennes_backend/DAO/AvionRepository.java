package com.example.gestion_companies_aeriennes_backend.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gestion_companies_aeriennes_backend.model.Avion;

public interface AvionRepository extends JpaRepository<Avion,Integer>{
	
}
