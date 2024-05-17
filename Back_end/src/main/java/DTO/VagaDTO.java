package DTO;

import java.util.List;

public class VagaDTO {
	private Long id;
    private String nome;
    private String descricao;
    private String salario;
    private List<CandidatoDTO> candidatos; // Lista de candidatos

    // Construtor
    public VagaDTO(Long id, String nome, String descricao, String salario, List<CandidatoDTO> candidatos) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.salario = salario;
        this.candidatos = candidatos;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String titulo) {
        this.nome = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    
    public String getSalario() {
        return salario;
    }

    public void setSalario(String salario) {
        this.salario = salario;
    }
    
    public List<CandidatoDTO> getCandidatos() {
        return candidatos;
    }

    public void setCandidatos(List<CandidatoDTO> candidatos) {
        this.candidatos = candidatos;
    }
}

