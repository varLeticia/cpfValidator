 #  **Verificação de CPF** 

- Neste projeto, foi desenvolvida uma biblioteca que verifica CPF retornando true ou false. 

- Para realização desse projeto, foi utilizado JavaScript ES6, e para testes, mocha e chai, e para testar cobertura, o NYC. 


  ## **Como instalar:** 
```sh
$ npm instal cpf-validator-leticia
```

  ## **Como utilizar:** 
   #### Exemplo que retorna true:
```sh
> const cpfValidator = require("cpf-validator-leticia"); 
> cpfValidator('46083135842')
> // return "true"
```
   #### Exemplo que retorna false:
```sh
> const cpfValidator = require("cpf-validator-leticia"); 
> cpfValidator('46083135840')
> // return "false"
```
  ## **Roadmap oficial do projeto:**
  #### versão 1.0.0 (released)
  - funcionalidades: valida cpf, retornando true ou false.