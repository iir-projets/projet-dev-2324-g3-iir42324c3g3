package com.example.gestion_companies_aeriennes_backend.DAO;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gestion_companies_aeriennes_backend.model.Ville;
import com.example.gestion_companies_aeriennes_backend.model.Pays;
public interface VilleRepository extends JpaRepository<Ville,Integer>{

	List<Ville> findByPays(Pays pays);
	
	 

}
