package com.example.gestion_companies_aeriennes_backend.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.gestion_companies_aeriennes_backend.model.Vol;

@Repository
public interface VolRepository extends JpaRepository<Vol,Integer> {

}
