# Projeto de Testes Automatizados com Cypress

## Descrição
Este é um projeto de testes automatizados utilizando **Cypress**. Ele inclui a implementação de testes em sites públicos com o suporte de **Cucumber** e **Gherkin** para descrição de cenários e **Page Objects** para organização do código.

## Estrutura do Projeto
- **cypress/**
  - **e2e/**: Diretório principal para os testes.
    - **features/**: Contém os arquivos `.feature` que descrevem os cenários de teste utilizando Gherkin.
    - **pages/**: Implementação do padrão Page Objects para manter os elementos e interações de cada página.
    - **steps/**: Contém os arquivos de definição de passos (steps definitions) para os cenários descritos em features.

- **node_modules/**: Dependências instaladas do projeto.
- **.gitignore**: Arquivo que especifica quais arquivos ou pastas serão ignorados pelo Git.
- **cypress.config.js**: Configurações do Cypress.
- **package-lock.json**: Versões exatas das dependências instaladas.
- **package.json**: Configurações do projeto e dependências necessárias.
- **README.md**: Documentação do projeto.

## Funcionalidades
- Escrita de testes em linguagem natural com suporte a Gherkin.
- Organização de código com Page Objects.
- Execução de testes automatizados em sites públicos.

## Requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- Node.js (v16 ou superior)
- Cypress (v10 ou superior)

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/KlebioCosta/aulacy
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd cypress-cucumber-bdd
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Executar os Testes
1. Abra o Cypress em modo interativo:
   ```bash
   npx cypress open
   ```
2. Execute os testes diretamente pelo terminal:
   ```bash
   npx cypress run
   ```

