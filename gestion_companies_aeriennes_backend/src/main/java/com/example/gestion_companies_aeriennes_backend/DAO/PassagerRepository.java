package com.example.gestion_companies_aeriennes_backend.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gestion_companies_aeriennes_backend.model.Passager;

public interface PassagerRepository extends JpaRepository<Passager,String> {

}
