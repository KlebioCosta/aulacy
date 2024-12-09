import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import ConsultarCPFInvalidoPage from "../pages/ConsultarCPFInvalidoPage.cy";

const login = new ConsultarCPFInvalidoPage();

Given('eu acesso a página de consultar cadastro de pessoa física', () => {
  cy.log('Acessando a página para consulta...')
  login.enterURL();
});
And("clico em iniciar", () => {
  cy.log('Clicando para abrir menu...')
  login.clickIniciar();
});
When('eu adiciono as credencias', () => {
  login.preencherCampos('00000000000', '01012000')
})
And('clico em consultar', () => {
  cy.log('Clicando em Consultar...');
  login.clickConsultar();
});
Then('a mensagem de CPF incorreto será exibida', () => {
  cy.log('Visualizando mensagem de CPF invalido')
  login.verificarMensagemDeBloqueio();
})


