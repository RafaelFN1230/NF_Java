# Sumário

- [Login](#login)
- [Funcionários](#funcionários)
- [Vagas](#vagas)
- [Candidatos](#candidatos)

-----------------------
## Login
-----------------------
URL: `POST /login`
Requisição
 ```json
{
  "email": "user@gmail.com",
  "senha": "sua_senha"
}
```

Resposta - **200 OK**
```json
{
  "id": 1,
  "message": "Login realizado com sucesso!"
}
```

____
## Funcionários
___
#### Criar funcionários
URL: `POST /users`
 Requisição
 ```json
 {
  "nome": "Rafael",
  "data": "15/05/2024",
  "email": "user@gmail.com",
  "senha": "sua_senha"
}
 ```
 Resposta - **201 Created**
 ```json
 {
 "message": "Funcionário cadastrado com sucesso!"
}
 ```

#### Listar todos os funcionários
URL: `GET /funcionarios`
 Resposta - **200 OK**
 ```json
 [
    {
    "id": 1,
    "nome": "Rafael",
    "data": "15/05/2024",
    "email": "user@gmail.com",
    "senha": "sua_senha",
    "vagas": [
        {
        "id": 2,
        "nome": "Desenvolvedor Full Stack",
        "descricao": "Desenvolvimento de aplicações web full stack utilizando Java e Spring Boot",
        "salario": "7000.00",
        "candidatos": [
            {
                "id": 1,
                "rg": "12.345.678-90",
                "nomeCandidato": "Fulano",
                "email": "fulano@example.com",
                "resumoCurriculo": "resumoCurriculo"
            },
            {...},
        ]},
        {...},
    ]
    },
    {...},
    {...}
 ]
 
 ```

#### Buscar funcionários pelo id
URL: `GET /funcionario/{id}`
Requisição: id enviado na URL
 Resposta - **200 OK**
 ```json
 {
  "id": 8,
  "nome": "nome funcionário",
  "data": "26/05/2024",
  "email": "user@gmail.com",
  "senha": "sua_senha",
  "vagas": [
    {
      "id": 1,
      "nome": "nome da vaga",
      "descricao": "Descrição da vaga.",
      "salario": "2000,00",
      "candidatos": []
    },
    {
      "id": 2,
      "nome": "nome da vaga",
      "descricao": "Descrição da vaga.",
      "salario": "2000,00",
      "candidatos": [
        {
          "id": 1,
          "rg": "14.558.996-10",
          "nomeCandidato": "Nome do candidato",
          "email": "candidato@email.com",
          "resumoCurriculo": "resumo do curriculo"
        }
      ]
    }
  ]
}
 ```


#### Deletar funcionários
URL: `DELETE /funcionario/{id}`
Requisição: id enviado na URL
 Resposta - **204 No Content**
 ```json
  ""
 ```
 Resposta - **401 Unauthorized**
 ```json
 {
 "message": "Funcionário não encontrado"
}
 ```

#### Editar funcionários
URL: `PUT /funcionario/{id}`
Requisição: id enviado na URL
```json
 {
  "nome": "Rafael",
  "data": "15/05/2024",
  "email": "user@gmail.com",
  "senha": "sua_senha"
}
 ```
 Resposta - **200 OK**
 ```json
 {
  "message": "Funcionário atualizado com sucesso!"
}
 ```

 Resposta - **404 Not Found**
 ```json
 {
  "message": "Funcionário não encontrado"
}
 ```
 Resposta - **400 Bad Request**
    - Ocorre quando os campos enviados estou incorretos ou incompletos.
 ```json
 {
  "message": "Verifique os campos"
}
 ```


____
## Vagas
___
#### Criar vagas
URL: `POST /cadastrarVaga?funcionario_id={id}`
 Requisição
  - Feita via query params.
  - Body:
 ```json
{
  "nome": "Desenvolvedor Full Stackc as ser removida",
  "descricao": "Desenvolvimento de aplicações web full stack utilizando Java e Spring Boot",
  "salario": "7000.00"
}
 ```
 Resposta - **201 Created**
 ```json
 {
 "message": "Vaga cadastrada com sucesso!"
}
 ```

  Resposta - **404 Not Found**
 ```json
 {
  "message": "Funcionário não encontrado."
}
 ```
 Resposta - **400 Bad Request**
    - Ocorre quando os campos enviados estou incorretos ou incompletos.
 ```json
 {
  "message": "Verifique os campos..."
}
 ```

#### Listar todos as vagas
URL: `GET /vagas?funcionario_id=2`
Requisição
  - Feita via query params.

 Resposta - **200 OK**
 ```json
[{
    "id": 2,
    "nome": "Desenvolvedor Full Stack",
    "descricao": "Desenvolvimento de aplicações web full stack utilizando Java e Spring Boot",
    "salario": "7000.00",
    "candidatos": [
        {
            "id": 1,
            "rg": "12.345.678-90",
            "nomeCandidato": "Fulano",
            "email": "fulano@example.com",
            "resumoCurriculo": "resumoCurriculo"
        },
        {...},
    ]},
{...}
] 
 ```

#### Buscar vaga pelo id
URL: `GET /vaga/{codigo}`
Requisição: 
    - codigo enviado na URL

 Resposta - **200 OK**
 ```json
 {
  "id": 4,
  "nome": "Desenvolvedor Full Stack Pleno",
  "descricao": "Desenvolvimento de aplicações web full stack utilizando Java e Spring Boot",
  "salario": "7000.00",
  "candidatos": [
    {
        "id": 1,
        "rg": "12.345.678-90",
        "nomeCandidato": "Fulano",
        "email": "fulano@example.com",
        "resumoCurriculo": "resumoCurriculo"
    },
    {...},
    {...},
  ]
}
 ```

#### Editar funcionários
URL: `PUT /editar-vaga/{codigo}`

Requisição:
    - id enviado na URL
```json
{
  "nome": "Desenvolvedor Full Stackc",
  "descricao": "Desenvolvimento de aplicações web full stack utilizando Java e Spring Boot",
  "salario": "7000.00"
}
 ```
 Resposta - **200 OK**
 ```json
 {
  "message": "Vaga alterada com sucesso!"
}
 ```

 Resposta - **400 Bad Request**
 - Ocorre quando os campos enviados estou incorretos ou incompletos.
 ```json
 {
  "message": "Verifique os campos"
}
 ```


#### Deletar vagas
URL: `DELETE /vaga/{codigo}`
Requisição:
    -id enviado na URL

 Resposta - **204 No Content**
 ```json
  ""
 ```

____
## Candidatos
___
#### Criar candidatos
URL: `POST /vaga/{jobOfferId}/candidato`
 Requisição
    - id enviado na URL
    - Body:
 ```json
{
    "rg": "14.111.111-22",
    "nomeCandidato": "Fulano da Silva",
    "email": "fulano@example.com",
    "resumoCurriculo": "Resumo alterado"
}
 ```
 Resposta - **201 Created**
 ```json
 {
 "message": "Candidato adicionado com sucesso!"
}
 ```

  Resposta - **400 Bad Request**
    - Ocorre quando o RG já esta cadastrado.
 ```json
 {
  "message": "RG duplicado."
}
 ```

 Resposta - **400 Bad Request**
    - Ocorre quando os campos enviados estou incorretos ou incompletos.
 ```json
 {
  "message": "Verifique os campos..."
}
 ```

#### Editar vagas
URL: `PUT /{RG}`

Requisição:
    - RG enviado na URL
    - Body
```json
{
    "rg": "14.111.111-22",
    "nomeCandidato": "Fulano alteradoNovamente",
    "email": "fulano_Alterado@example.com",
    "resumoCurriculo": "Resumo alterado"
}
 ```
 Resposta - **200 OK**
 ```json
 {
  "message": "Candidato atualizado com sucesso"
}
 ```

 Resposta - **400 Bad Request**
 - Ocorre quando os campos enviados estou incorretos ou incompletos.
 ```json
 {
  "message": "Verifique os campos"
}
 ```


#### Deletar vagas
URL: `DELETE /{RG}`
Requisição:
    -RG enviado na URL

 Resposta - **204 No Content**
 ```json
  ""
 ```


