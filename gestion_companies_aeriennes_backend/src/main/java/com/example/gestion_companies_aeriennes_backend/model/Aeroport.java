package com.example.gestion_companies_aeriennes_backend.model;
//import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
@Entity
@Table(name="aeroport")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Aeroport {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer num;
	@Column
	private String nom_aeroport;
	@Column
	private String ville;
	@Column
	private String pays;
	
	
}
