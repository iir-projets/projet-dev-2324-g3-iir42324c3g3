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
@Table(name="avion")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Avion {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer num;
	@Column
	private String nom;
	@Column
	private Integer capacite;
	
	
}