import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LanguageSwitcher from '../pages/LanguageSwitcher.cy';

const languageSwitcher = new LanguageSwitcher();

Given('que o usuário está na página inicial', () => {
  cy.visit('https://www.enap.gov.br/pt/');
});

When('seleciona o idioma "English" no seletor de idiomas', () => {
  languageSwitcher.selectLanguage('English');
});

Then('a url do site deve conter o o diretorio en', () => {
  cy.url().should('include', '/en');
});
