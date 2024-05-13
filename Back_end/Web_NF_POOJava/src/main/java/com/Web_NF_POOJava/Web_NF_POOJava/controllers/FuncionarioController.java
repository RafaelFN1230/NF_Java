package com.Web_NF_POOJava.Web_NF_POOJava.controllers;

import jakarta.validation.Valid;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


import com.Web_NF_POOJava.Web_NF_POOJava.models.Candidato;
import com.Web_NF_POOJava.Web_NF_POOJava.models.Funcionario;
import com.Web_NF_POOJava.Web_NF_POOJava.models.Vaga;
import com.Web_NF_POOJava.Web_NF_POOJava.repository.FuncionarioRepository;

import DTO.CandidatoDTO;
import DTO.FuncionarioDTO;
import DTO.VagaDTO;

@Controller
public class FuncionarioController {

	@Autowired
	private FuncionarioRepository fr;
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestParam("email") String email, @RequestParam("senha") String senha) {
	    Funcionario funcionario = fr.findByEmailAndSenha(email, senha);
	    if (funcionario != null) {
	        return ResponseEntity.ok("Login realizado com sucesso!");
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha incorretos!");
	    }
	}
	// POST que cadastra funcionários
	@PostMapping("/funcionario")
    public ResponseEntity<String> cadastrarFuncionario(@Valid @RequestBody Funcionario funcionario, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>("Verifique os campos", HttpStatus.BAD_REQUEST);
        }
        fr.save(funcionario);
        return new ResponseEntity<>("Funcionário cadastrado com sucesso!", HttpStatus.CREATED);
    }

	// GET que lista funcionários
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/funcionarios")
	public ResponseEntity<List<FuncionarioDTO>> listarFuncionariosComVagasECandidatos() {
        Iterable<Funcionario> funcionarios = fr.findAll();
        List<FuncionarioDTO> funcionariosDTO = new ArrayList<>();

        for (Funcionario funcionario : funcionarios) {
            List<VagaDTO> vagasDTO = new ArrayList<>();

            for (Vaga vaga : funcionario.getVagas()) {
                List<CandidatoDTO> candidatosDTO = new ArrayList<>();

                for (Candidato candidato : vaga.getCandidatos()) {
                    CandidatoDTO candidatoDTO = new CandidatoDTO(candidato.getId(), candidato.getRg(), candidato.getNomeCandidato(), candidato.getEmail());
                    candidatosDTO.add(candidatoDTO);
                }

                VagaDTO vagaDTO = new VagaDTO(vaga.getId(), vaga.getNome(), vaga.getDescricao(), vaga.getSalario(), candidatosDTO);
                vagasDTO.add(vagaDTO);
            }

            FuncionarioDTO funcionarioDTO = new FuncionarioDTO(funcionario.getId(), funcionario.getNome(), funcionario.getData(), funcionario.getEmail(), funcionario.getSenha(), vagasDTO);
            funcionariosDTO.add(funcionarioDTO);
        }

        return ResponseEntity.ok(funcionariosDTO);
    }

	// GET que lista dependentes e detalhes dos funcionário
	@GetMapping("/funcionario/{id}")
	public ResponseEntity<FuncionarioDTO> detalhesFuncionarioComVagasECandidatos(@PathVariable("id") long id) {
        Funcionario funcionario = fr.findById(id);
        if (funcionario == null) {
            return ResponseEntity.notFound().build();
        }

        List<VagaDTO> vagasDTO = new ArrayList<>();

        for (Vaga vaga : funcionario.getVagas()) {
            List<CandidatoDTO> candidatosDTO = new ArrayList<>();

            for (Candidato candidato : vaga.getCandidatos()) {
                CandidatoDTO candidatoDTO = new CandidatoDTO(candidato.getId(), candidato.getRg(), candidato.getNomeCandidato(), candidato.getEmail());
                candidatosDTO.add(candidatoDTO);
            }

            VagaDTO vagaDTO = new VagaDTO(vaga.getId(), vaga.getNome(), vaga.getDescricao(), vaga.getSalario(), candidatosDTO);
            vagasDTO.add(vagaDTO);
        }

        FuncionarioDTO funcionarioDTO = new FuncionarioDTO(funcionario.getId(), funcionario.getNome(), funcionario.getData(), funcionario.getEmail(), funcionario.getSenha(), vagasDTO);

        return ResponseEntity.ok(funcionarioDTO);
    }


	
	//DELETE funcionário
	@DeleteMapping("/funcionario/{id}")
    public ResponseEntity<String> deletarFuncionario(@PathVariable("id") long id) {
        Funcionario funcionario = fr.findById(id);
        if (funcionario == null) {
            return new ResponseEntity<>("Funcionário não encontrado", HttpStatus.NOT_FOUND);
        }
        fr.delete(funcionario);
        return new ResponseEntity<>("Funcionário deletado com sucesso!", HttpStatus.NO_CONTENT);
    }
	// Métodos que atualizam funcionário
	// GET que chama o FORM de edição do funcionário
	@RequestMapping("/editar-funcionario")
	public ModelAndView editarFuncionario(long id) {
		Funcionario funcionario = fr.findById(id);
		ModelAndView mv = new ModelAndView("funcionario/update-funcionario");
		mv.addObject("funcionario", funcionario);
		return mv;
	}
	
	// PUT que atualiza o funcionário
	@PutMapping("/funcionario/{id}")
    public ResponseEntity<String> atualizarFuncionario(@PathVariable("id") long id, @Valid @RequestBody Funcionario funcionario, BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>("Verifique os campos", HttpStatus.BAD_REQUEST);
        }
        Funcionario existingFuncionario = fr.findById(id);
        if (existingFuncionario == null) {
            return new ResponseEntity<>("Funcionário não encontrado", HttpStatus.NOT_FOUND);
        }
        existingFuncionario.setNome(funcionario.getNome());
        // Adicione outras propriedades que você deseja atualizar
        fr.save(existingFuncionario);
        return new ResponseEntity<>("Funcionário atualizado com sucesso!", HttpStatus.OK);
    }
}
