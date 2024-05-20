package DTO;

public class CandidatoDTO {
    private Long id;
    private String rg;
    private String nomeCandidato;
    private String email;
    private String resumoCurriculo;

    // Construtor 
    public CandidatoDTO(Long id, String rg, String nomeCandidato, String email, String resumoCurriculo) {
        this.id = id;
        this.rg = rg;
        this.nomeCandidato = nomeCandidato;
        this.resumoCurriculo = resumoCurriculo;
        this.email = email;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getNomeCandidato() {
        return nomeCandidato;
    }

    public void setNomeCandidato(String nomeCandidato) {
        this.nomeCandidato = nomeCandidato;
    }
    
    public String getResumoCurriculo() {
        return resumoCurriculo;
    }

    public void setResumoCurriculo(String resumoCurriculo) {
        this.resumoCurriculo = resumoCurriculo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
