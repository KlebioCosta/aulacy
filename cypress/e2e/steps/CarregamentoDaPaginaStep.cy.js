import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import CarregamentoDaPagina from "../pages/CarregamentoDaPagina.cy";

const receita = new CarregamentoDaPagina();

Given('eu acesso a página inicial da Receita Federal', () => {
  receita.acessarPagina();
});

Then('a página será carregada sem erros', () => {
  receita.verificarCarregamentoSemErros();
});

Then('os elementos essenciais serão exibidos', () => {
  receita.verificarElementosEssenciais();
});
