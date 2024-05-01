package com.example.gestion_companies_aeriennes_backend.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gestion_companies_aeriennes_backend.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation,Integer>{

}
