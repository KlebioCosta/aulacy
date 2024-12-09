class HomePage {
    visit() {
      cy.visit('https://www.enap.gov.br/pt/');
    }
  
    getTitle() {
      return cy.title();
    }
  }
  
  export default HomePage;
  