import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LanguageSwitcher from '../pages/LanguageSwitcher.cy';

const languageSwitcher = new LanguageSwitcher();

Given('que o usuário está na página inicial', () => {
  cy.log('Acessando a página inicial...')
  cy.visit('https://www.enap.gov.br/pt/');
});

When('seleciona o idioma "English" no seletor de idiomas', () => {
  cy.log('Selecionando idioma...')
  languageSwitcher.selectLanguage('English');
});

Then('a url do site deve conter o o diretorio en', () => {
  cy.log('Viazualizando pagina em outro idioma...')
  cy.url().should('include', '/en');
});
