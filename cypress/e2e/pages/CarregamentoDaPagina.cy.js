class CarregamentoDaPagina {
    acessarPagina() {
      cy.visit("https://www.gov.br/receitafederal/pt-br");
    }
  
    verificarCarregamentoSemErros() {
      cy.url().should('include', 'https://www.gov.br/receitafederal/pt-br');
      cy.window().then((win) => {
        expect(win.document.readyState).to.eq('complete');
      });
    }
  
    verificarElementosEssenciais() {
      cy.get('.swiper-slide-active > .image-wrapper > picture > .carousel-image').should('be.visible');
  
      cy.get('body').should('be.visible');
  
      cy.get('a[href]').should('have.length.greaterThan', 5);
    }
  }
  
  export default CarregamentoDaPagina;
  