import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import MudarTemaPage from "../pages/MudarTemaPage.cy";

const tema = new MudarTemaPage();

Given('eu acesso a página inicial', () => {
    cy.log('Acessando a página inicial...');
    tema.enterURL();
})
When('clico em mudar tema', () => {
    cy.log('Clicando para alterar o tema...');
    tema.clickTema();
})
Then('o tema mudará', () => {
    cy.log('Verificando se o tema foi alterado...')
    tema.verificarTemaAlterado();
})
And('clico em mudar tema para o padrão', () => {
    cy.log('Clicando para o tema voltar ao padrao...');
    tema.clickTema();
})
Then('o tema voltará ao estado inicial', () => {
    cy.log('Verificando se o tema volta ao padrão...')
    tema.verificarTemaPadrão();
})