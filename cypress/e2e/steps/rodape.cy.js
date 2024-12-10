import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Footer from '../pages/Footer.cy';

const footer = new Footer();

Given('que o usuário está no rodapé da página inicial', () => {
  cy.visit('/');
  cy.scrollTo('bottom');
});

When('clica no ícone do {string}', (iconName) => {
  footer.clickSocialMedia(iconName);
});

Then('é redirecionado para a página oficial da ENAP no {string}', (socialMedia) => {
  const urls = {
    Facebook: 'facebook.com/enap',
    Twitter: 'twitter.com/enap',
    LinkedIn: 'linkedin.com/company/enap',
  };
  cy.url().should('include', urls[socialMedia]);
});
