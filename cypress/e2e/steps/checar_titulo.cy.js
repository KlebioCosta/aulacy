// import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/HomePage.cy';
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const homePage = new HomePage();

Given('que o usuário acessa a página inicial', () => {
  cy.log('Acessando a página inicial...')
  homePage.visit();
});

Then('o título da página deve ser Enap - Escola Nacional de Administração Pública - Home', () => {
  cy.log('Visualizando o título...')
  homePage.getTitle().should('eq', "Enap - Escola Nacional de Administração Pública - Home");
  //console.log(homePage.getTitle());
});
