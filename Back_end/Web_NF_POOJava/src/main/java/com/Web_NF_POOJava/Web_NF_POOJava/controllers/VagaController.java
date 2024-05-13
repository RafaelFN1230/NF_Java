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

import com.Web_NF_POOJava.Web_NF_POOJava.models.Candidato;
import com.Web_NF_POOJava.Web_NF_POOJava.models.Funcionario;
import com.Web_NF_POOJava.Web_NF_POOJava.models.Vaga;
import com.Web_NF_POOJava.Web_NF_POOJava.repository.CandidatoRepository;
import com.Web_NF_POOJava.Web_NF_POOJava.repository.FuncionarioRepository;
import com.Web_NF_POOJava.Web_NF_POOJava.repository.VagaRepository;

import DTO.CandidatoDTO;
import DTO.VagaDTO;

@Controller
public class VagaController {
	@Autowired
	private VagaRepository vr;
	
	@Autowired
	private CandidatoRepository cr;
	
	@Autowired
    private FuncionarioRepository fr;

	// POST que cadastra a vaga
	@PostMapping ("/cadastrarVaga")
	public ResponseEntity<String> cadastrarVaga(@RequestParam("funcionario_id") long funcionarioId, @Valid @RequestBody Vaga vaga, BindingResult result, RedirectAttributes attributes) {
	    if (result.hasErrors()) {
	        attributes.addFlashAttribute("mensagem", "Verifique os campos...");
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Verifique os campos...");
	    }

	    Funcionario funcionario = fr.findById(funcionarioId);
	    if (funcionario == null) {
	        attributes.addFlashAttribute("mensagem", "Funcionário não encontrado.");
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado.");
	    }

	    // Associando a Vaga ao Funcionário
	    vaga.setFuncionario(funcionario);

	    // Salvando a Vaga
	    vr.save(vaga);
	    
	    attributes.addFlashAttribute("mensagem", "Vaga cadastrada com sucesso!");
	    return ResponseEntity.status(HttpStatus.CREATED).body("Vaga cadastrada com sucesso!");
	}

	// GET que lista as vagas
	@GetMapping("/vagas")
	public ResponseEntity<List<VagaDTO>> listarVagasFuncionario(@RequestParam("funcionario_id") long funcionarioId) {
        Funcionario funcionario = fr.findById(funcionarioId);
        if (funcionario == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        List<Vaga> vagasFuncionario = funcionario.getVagas();
        List<VagaDTO> vagasDTO = new ArrayList<>();
        for (Vaga vaga : vagasFuncionario) {
            List<CandidatoDTO> candidatosDTO = new ArrayList<>();
            for (Candidato candidato : vaga.getCandidatos()) {
                CandidatoDTO candidatoDTO = new CandidatoDTO(candidato.getId(), candidato.getRg(), candidato.getNomeCandidato(), candidato.getEmail());
                candidatosDTO.add(candidatoDTO);
            }
            VagaDTO vagaDTO = new VagaDTO(vaga.getId(), vaga.getNome(), vaga.getDescricao(), vaga.getSalario(), candidatosDTO);
            vagasDTO.add(vagaDTO);
        }
        return new ResponseEntity<>(vagasDTO, HttpStatus.OK);
    }

    @GetMapping("/vaga/{codigo}")
    public ResponseEntity<VagaDTO> detalhesVaga(@PathVariable("codigo") long codigo) {
        Vaga vaga = vr.findById(codigo);
        if (vaga == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<CandidatoDTO> candidatosDTO = new ArrayList<>();
        for (Candidato candidato : vaga.getCandidatos()) {
            CandidatoDTO candidatoDTO = new CandidatoDTO(candidato.getId(), candidato.getRg(), candidato.getNomeCandidato(), candidato.getEmail());
            candidatosDTO.add(candidatoDTO);
        }
        VagaDTO vagaDTO = new VagaDTO(vaga.getId(), vaga.getNome(), vaga.getDescricao(), vaga.getSalario(), candidatosDTO);
        return new ResponseEntity<>(vagaDTO, HttpStatus.OK);
    }

	@PostMapping("/vaga/{codigo}/candidato")
    public ResponseEntity<String> adicionarCandidato(@PathVariable("codigo") long codigo, 
										@Valid @RequestBody Candidato candidato, 
										BindingResult result, 
										RedirectAttributes attributes) {
		
		if (result.hasErrors()) {
            attributes.addFlashAttribute("mensagem", "Verifique os campos...");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Verifique os campos...");
        }

		if (cr.findByRg(candidato.getRg()) != null) {
            attributes.addFlashAttribute("mensagem", "RG duplicado");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("RG duplicado");
        }
		
	    Vaga vaga = vr.findById(codigo);
	    if (vaga == null) {
	        attributes.addFlashAttribute("mensagem", "Vaga não encontrada.");
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vaga não encontrada.");
	    }

	    if (candidato.getVaga() != null) {
	        attributes.addFlashAttribute("mensagem", "O candidato já está associado a uma vaga.");
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("O candidato já está associado a uma vaga.");
	    }

	    candidato.setVaga(vaga);
	    cr.save(candidato);
	    vr.save(vaga);

        attributes.addFlashAttribute("mensagem", "Candidato adicionado com sucesso!");
        return ResponseEntity.status(HttpStatus.CREATED).body("Candidato adicionado com sucesso!");
    }

    @DeleteMapping("/vaga/{codigo}")
    public ResponseEntity<String> deletarVaga(@PathVariable("codigo") long codigo) {
        Vaga vaga = vr.findById(codigo);
        if (vaga == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        vr.delete(vaga);
        return new ResponseEntity<>("Vaga deletada com sucesso!", HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/candidato")
    public ResponseEntity<String> deletarCandidato(@RequestParam String rg) {
        Candidato candidato = cr.findByRg(rg);
        if (candidato == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        cr.delete(candidato);
        return new ResponseEntity<>("Candidato deletado com sucesso!", HttpStatus.NO_CONTENT);
    }

    @PutMapping("/editar-vaga/{codigo}")
    public ResponseEntity<String> updateVaga(@PathVariable long codigo, @Valid @RequestBody Vaga vaga,
            BindingResult result) {
        if (result.hasErrors()) {
            return new ResponseEntity<>("Verifique os campos", HttpStatus.BAD_REQUEST);
        }
        Vaga existingVaga = vr.findById(codigo);
        if (existingVaga == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        existingVaga.setNome(vaga.getNome());
        existingVaga.setDescricao(vaga.getDescricao());
        vr.save(existingVaga);
        return new ResponseEntity<>("Vaga alterada com sucesso!", HttpStatus.OK);
    }
}
