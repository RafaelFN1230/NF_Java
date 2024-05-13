package DTO;

import java.util.List;

public class FuncionarioDTO {
    private Long id;
    private String nome;
    private String data;
    private String email;
    private String senha;
    private List<VagaDTO> vagas; //Lista de vagas


    // Construtor
    public FuncionarioDTO(Long id, String nome, String data, String email, String senha, List<VagaDTO> vagas) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.email = email;
        this.senha = senha;
        this.vagas = vagas;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public List<VagaDTO> getVagas() {
		return vagas;
	}

	public void setVagas(List<VagaDTO> vagas) {
		this.vagas = vagas;
	}
}
