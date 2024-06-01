# Avaliação NF PBL: POO Java - Aplicação Web ou Mobile

## UniRuy | Wyden

## Disciplina:

Programação Orientada a Objetos em Java

## Modelo da Aplicação

Para o desenvolvimento do projeto, optei por criar uma aplicação web.
Com o back-end desenvolvido em java

# Conteúdos Primários

## Introdução

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Front-End

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Back-End


### Banco

## Objetivos da Aplicação
Esta aplicação tem como objetivo ajudar uma empresa de talent aquisition acompanhar a perfomace de seus funcionarios e centralizar o cadastro e armazenamento de informações de vagas e candidatos.

## Funções/Lista de Eventos (Funcionalidades)
[x] Logar.
[x] Criar e Armazenar user id nos cookies.
[x] Demonstrar Informações.
[x] Cadastrar Usuario.
[x] Cadastrar Vaga.
[x] Cadastrar Candidato.
[x] Editar Usuario.
[x] Editar Vaga.
[x] Editar Candidato.
[x] Deletar Usuario.
[x] Deletar Vaga.
[x] Deletar Candidato.

### Especificação de Programas

#### Layout da Tela;
As telas são primariamentes compostas por um header e um body, o header possui o logo da universidade e um incone para abrir o menu de navegação.


#### Regras de Negócio;
1. Autenticação e Sessão
    * O usuário deve logar com um único email e senha, não pode haver duplicidade.
    * A sessão do usuário deve persistir por um longo período sem necessidade de relogin.
    * As senhas dos usuários não precisam ser armazenadas de forma segura, pois a aplicação será executada localmente. Em caso de esquecimento, as senhas podem ser consultadas diretamente no banco de dados.

2. Gerenciamento de Usuários
    * Um usuário pode adicionar e excluir outros usuários, mas só pode editar o nome dos usuários.
    * O email e a senha de um usuário não podem ser alterados após a criação.
    * Não é permitido haver dois usuários com o mesmo email no sistema.

3. Gerenciamento de Vagas
    * Um usuário pode criar, editar e excluir somente as vagas que ele próprio cadastrou.
    * Vagas podem ter nomes, descrições e salários repetidos.
    * Cada vaga deve ter um ID único para identificação.
    * As vagas serão referidas através do seu ID.

4. Gerenciamento de Candidatos
    * Um candidato pode ser associado a apenas uma vaga.
    * O funcionário pode editar o nome, email e resumo de um candidato, mas o RG não pode ser alterado.
    * O funcionário pode excluir candidatos.

5. Execução Local
    * A aplicação será executada apenas localmente.

#### Entidades Envolvidas (Classes) / Tabelas
Esta aplicação possui tres entidades: Funcionario, vaga e Candidatos.

##### Funcionário
* Atributos:
    * long id (PK)
    * String nome
    * String data
    * String email
    * String senha
    * List< Vaga > vagas

##### vaga
* Atributos:
    * Long id (PK)
    * String nome
    * String descricao
    * String salario
    * List< Candidato > candidatos

##### Candidatos
* Atributos:
    * long id (PK)
    * String rg
    * String nomeCandidato
    * String resumoCurriculo
    * String email

## Requisitos Funcionais (RF)
1. Autenticação de Usuário
    * O usuário deve ser criado usando o nome completo, email e senha por qualquer outro usuário.
    * O usuário deve poder logar e deslogar usando email e senha.
    * Após logar, o usuário não deve precisar logar novamente por um longo período.

2. Gerenciamento de Usuários
    * Qualquer usuário pode adicionar e excluir usuários, mas só pode editar o nome dos usuários.
    * Quando adicionar um funcionário, deve ser coletado nome completo, email e senha.
    * Quando um usuário for adicionado, deve ser registrada a data de inserção no sistema.
    * Não pode haver dois usuários com o mesmo email.

3. Dashboard
    * Deve possuir um dashboard que acompanhe as vagas que possuem candidatos e as que não possuem, tanto no âmbito geral quanto separadas por funcionários.

4. Gerenciamento de Vagas
    * O usuário pode cadastrar uma vaga, que deve conter nome, salário e descrição.
    * Pode haver vagas com o mesmo nome, descrição e salário.
    * O usuário pode editar o nome, salário e descrição de uma vaga.
    * O usuário pode excluir uma vaga.
    * O usuário só pode ver, editar e excluir as vagas que ele cadastrou.
    * O usuário deve visualizar as informações da vaga em uma lista, incluindo o ID da vaga.

5. Gerenciamento de Candidatos
    * O usuário pode adicionar candidatos a uma vaga.
    * Para adicionar um candidato, deve ser coletado nome, RG, email e resumo do currículo.
    * Um candidato só pode ser cadastrado em uma vaga.
    * O funcionário deve poder ver quais candidatos estão cadastrados em cada vaga.
    * O funcionário pode editar o nome, email e resumo do currículo, mas não pode editar o RG.
    * O funcionário pode excluir um candidato.

## Requisitos Não Funcionais (RNF)
1. Segurança
    * As senhas dos usuários não precisam ser armazenadas de forma segura, pois a aplicação roda localmente e em caso de esquecimento, a senha pode ser consultada diretamente no banco de dados..
    * O sistema deve garantir que não haja usuários duplicados com o mesmo email.

2. Desempenho
    * O sistema deve suportar múltiplos usuários simultaneamente sem degradação significativa de desempenho.
    * O sistema deve garantir tempos de resposta adequados para operações comuns (cadastrar vagas, adicionar candidatos, etc.).

3. Usabilidade
    * A interface deve ser intuitiva e fácil de usar.
    * O dashboard deve fornecer uma visão clara e concisa das vagas e candidatos.

4. Persistência de Dados
    * O sistema deve garantir a integridade dos dados armazenados.
    * Todas as operações de CRUD (Create, Read, Update, Delete) devem ser devidamente tratadas para evitar inconsistências.

5. Manutenibilidade
    * O código deve ser bem documentado e seguir boas práticas de desenvolvimento.

## DER ou Diagrama de Classe

### Artefato gráfico

### Dicionário de Dados (DD)

## Aplicação Protótipo

- [Link do Protótipo](https://www.figma.com/proto/dOWl6RKNlHzCSTeBZznAiR/NF-Java-Poo?type=design&node-id=1-2&t=a9hDKo7UeQvHPcte-1&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design)

### Menu/Submenu
A aplicação possui um menu lateral, onde o usuario poderá navegar pelo programa.
O menu possui dois estados, aberto e fechado.
[Menu Aberto]()
[Menu Fechado]()
### Telas Funcionais

### Telas de Diálogo

### Layout Relatórios

# Considerações Finais

Arquitetura:
Arquitetura MVC
