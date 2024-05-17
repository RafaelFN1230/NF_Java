package com.Web_NF_POOJava.Web_NF_POOJava.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.Web_NF_POOJava.Web_NF_POOJava.models.Candidato;
import com.Web_NF_POOJava.Web_NF_POOJava.models.Vaga;

public interface CandidatoRepository extends CrudRepository<Candidato, String> {
	Iterable<Candidato>findByVaga(Vaga vaga);
	
	Candidato findByRg(String rg);
	
	Candidato findById(long id);
	
	@Query(value = "select u from Candidato u where u.nomeCandidato like %?1%")
	List<Candidato> findByNomesCandidatos(String nomeCandidato);
}
