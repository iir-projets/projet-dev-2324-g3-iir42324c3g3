package com.example.gestion_companies_aeriennes_backend.model;


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
@Table(name="Pays")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Pays {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer matricule; 
	@Column
	private String libelle;
	
}
