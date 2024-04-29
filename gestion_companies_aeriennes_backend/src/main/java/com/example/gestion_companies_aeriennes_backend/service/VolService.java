package com.example.gestion_companies_aeriennes_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.gestion_companies_aeriennes_backend.DAO.AeroportRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.AvionRepository;
import com.example.gestion_companies_aeriennes_backend.DAO.VolRepository;
import com.example.gestion_companies_aeriennes_backend.DTO.VolDTO;
import com.example.gestion_companies_aeriennes_backend.model.Aeroport;
import com.example.gestion_companies_aeriennes_backend.model.Vol;
import com.example.gestion_companies_aeriennes_backend.model.Avion;


@Service
public class VolService {
	@Autowired
	public final VolRepository volRepository;
	@Autowired
	public final AeroportRepository aeroportRepository;
	@Autowired
	public final AvionRepository avionRepository;
	
	public VolService(VolRepository volRepository,AeroportRepository aeroportRepository,AvionRepository avionRepository) {
        this.volRepository = volRepository;
        this.aeroportRepository=aeroportRepository;
        this.avionRepository=avionRepository;
	}
	
	
	 public List<VolDTO> getAllVols(){
		 List<VolDTO> volDTO =new ArrayList<>();
		 List<Vol> vol=volRepository.findAll();
		 for(Vol v : vol) {
			 volDTO.add(VolDTO.toDTO(v));
		 }
		 return volDTO;
		 
	 }
	 public VolDTO getVolById(Integer id) {
		 Vol vol  = volRepository.findById(id).get();
		 if(vol != null) {
			 return VolDTO.toDTO(vol);
		 }
		 return null;
	 }
	 
	 public Vol toEntity(VolDTO volDTO) {
			
			return Vol.builder()
					.num(volDTO.getNum())
					.date_depart(volDTO.getDate_depart())
					.date_arrive(volDTO.getDate_arrive())
					.aeroport_depart(aeroportRepository.findById(volDTO.getId_aeroport_depart()).get())
					.aeroport_arrive(aeroportRepository.findById(volDTO.getId_aeroport_arrive()).get())
					.aller_retour(volDTO.getAller_retour())
					.type_classe(volDTO.getType_classe())
					.id_aeroport_escal(volDTO.getId_aeroport_escal())
					.escal_date(volDTO.getEscal_date())
					.avion(avionRepository.findById(volDTO.getId_avion()).get())
					.prix(volDTO.getPrix())
					.build();

		}
	 @Transactional
	 public VolDTO createVol(VolDTO vol) {
		 Aeroport aero_dept=aeroportRepository.findById(vol.getId_aeroport_depart()).get();
		 Aeroport aero_arv=aeroportRepository.findById(vol.getId_aeroport_arrive()).get();
		 
		 Avion avion=avionRepository.findById(vol.getId_avion()).get();
		 if(aero_dept != null && aero_arv != null && avion!=null ) {
			 volRepository.save(this.toEntity(vol));
			 return vol;
		 }
		 
		 return null ;
		 
	 }
	 @Transactional
	 public VolDTO updateVol(Integer Id,VolDTO vol) {
		 Aeroport aero_dept=aeroportRepository.findById(vol.getId_aeroport_depart()).get();
		 Aeroport aero_arv=aeroportRepository.findById(vol.getId_aeroport_arrive()).get();
		 Avion avion=avionRepository.findById(vol.getId_avion()).get();
		 
		 Vol ex_vol=volRepository.findById(Id).get();
		 if(aero_dept != null && aero_arv != null && avion!=null && ex_vol != null ) {
			 Vol new_vol=this.toEntity(vol);
			 ex_vol.setDate_arrive(new_vol.getDate_arrive());
			 ex_vol.setDate_depart(new_vol.getDate_depart());
			 ex_vol.setAeroport_depart(new_vol.getAeroport_depart());
			 ex_vol.setAeroport_arrive(new_vol.getAeroport_arrive());
			 ex_vol.setAller_retour(new_vol.getAller_retour());
			 ex_vol.setType_classe(new_vol.getType_classe());
			 ex_vol.setId_aeroport_escal(new_vol.getId_aeroport_escal());
			 ex_vol.setEscal_date(new_vol.getEscal_date());
			 ex_vol.setAvion(new_vol.getAvion());
			 ex_vol.setPrix(new_vol.getPrix());
			 volRepository.save(ex_vol);
			 return VolDTO.toDTO(ex_vol);
		 }
		 
		 return null;
	 }
	 public void deleteVol(Integer Id) {
		 Vol ex_vol=volRepository.findById(Id).get();
		 if(ex_vol != null) {
			 volRepository.delete(ex_vol); 
		 }
	 }

}
