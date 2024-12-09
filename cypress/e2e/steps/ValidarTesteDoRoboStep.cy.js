import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import FormularioPage from "../pages/ValidarTesteDoRoboPage.cy"; 

const formulario = new FormularioPage();

Given('eu acesso a página de consulta da Receita Federal', () => {
  cy.log('Acessando a página de cconsulta...')
  formulario.acessarPagina();

});

When('preencho os campos com dados inválidos', () => {
  cy.log('Preenchendo os campos...')
  formulario.preencherCampos('00000000000', '01012000');
});

When('submeto o formulário', () => {
  cy.log('Clicando em enviar...')
  formulario.submeterFormulario();
});

Then('a mensagem de erro será exibida', () => {
  cy.log('Verificando a mensagem de erro...')
  formulario.verificarMensagemDeErro();
});
