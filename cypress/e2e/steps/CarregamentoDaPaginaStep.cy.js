import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import CarregamentoDaPagina from "../pages/CarregamentoDaPagina.cy";

const receita = new CarregamentoDaPagina();

Given('eu acesso a página inicial da Receita Federal', () => {
  cy.log('Acessando a página para consulta...')
  receita.acessarPagina();
});

Then('a página será carregada sem erros', () => {
  cy.log('Carregando página...')
  receita.verificarCarregamentoSemErros();
});

Then('os elementos essenciais serão exibidos', () => {
  cy.log('Visualizando a página inicial...')
  receita.verificarElementosEssenciais();
});
