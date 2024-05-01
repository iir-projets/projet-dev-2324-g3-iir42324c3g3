package com.example.gestion_companies_aeriennes_backend.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;



import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;

import io.micrometer.common.lang.Nullable;


@Entity
@Table(name="vol")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Vol {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Integer num;
	@Column
	@JsonDeserialize(using = LocalDateTimeDeserializer.class)
	private LocalDateTime date_depart;
	@Column
	@JsonDeserialize(using = LocalDateTimeDeserializer.class)
	private LocalDateTime date_arrive;
	@ManyToOne
	@JoinColumn(name="aero_dept")
	private Aeroport aeroport_depart;
	@ManyToOne
	@JoinColumn(name="aero_arv")
	private Aeroport aeroport_arrive;
	@Column(columnDefinition = "boolean default false")
	private Boolean aller_retour;
	@Column
	private String  type_classe;
	@Column
	@Nullable
	private Integer id_aeroport_escal;
	@Column
	@Nullable
	private LocalDateTime escal_date;
	@ManyToOne
	@JoinColumn(name="avion")
	private Avion avion;
	@Column
	private Double prix;
	
	

}
