import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import FotosAduanaPage from "../pages/SecaoDeFotosPage.cy";

const fotosPage = new FotosAduanaPage();

Given('eu acesso a página de fotos da aduana', () => {
  cy.log('Acessando a página de fotos da aduana')
  fotosPage.enterURL();
});

Then('todas as imagens devem carregar corretamente', () => {
  cy.log('Carregando imagens...')
  fotosPage.validateImagesAreLoaded();
});

And('todas as imagens devem ter texto alternativo', () => {
  cy.log('Analisando o alt das imagens...')
  fotosPage.validateAltText();
});

When('clico no botão próximo', () => {
  cy.log('Clicando no botão...')
  fotosPage.clickNext();
});

Then('a próxima imagem é exibida', () => {
  cy.log('Exibindo a próxima imagem...')
  fotosPage.validateImageChanged('next');
});

And('clico no botão anterior', () => {
  cy.log('Clicando no botão anterior...')
  fotosPage.clickPrevious();
});

Then('a imagem anterior é exibida', () => {
  cy.log('Exibindo a imagem anterior....')
  fotosPage.validateImageChanged('previous');
});
