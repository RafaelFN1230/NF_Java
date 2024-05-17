package com.Web_NF_POOJava.Web_NF_POOJava.repository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.Web_NF_POOJava.Web_NF_POOJava.models.Vaga;

public interface VagaRepository extends CrudRepository<Vaga, String> {
	 Vaga findById(long id); //Procura a vaga pelo ID, que no caso se chama "Codigo"
	 List<Vaga> findByNome(String nome);
	 
	 @Query(value = "select u from Vaga u where u.nome like %?1%")
	 List<Vaga> findByNomesVaga(String nome);
}
