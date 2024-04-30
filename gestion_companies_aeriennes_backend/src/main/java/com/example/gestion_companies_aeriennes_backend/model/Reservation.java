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
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Reservation")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reservation {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
    private Integer id;

    @ManyToOne
    @JoinColumn(name="passager")
    private Passager passager;

    @Column
    private Integer nbr_place_res;
    @Column
    private String statut;
    @Column
    private double prix_reservation;
    @ManyToOne
    @JoinColumn(name = "vol")
    private Vol vol;
}
