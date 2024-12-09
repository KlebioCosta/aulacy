class FotosAduanaPage {
    enterURL() {
      cy.visit("https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/imagens/conheca-nossa-aduana", { timeout: 5000 });
    }
  
    validateImagesAreLoaded() {
      cy.get('img').each(($img) => {
        cy.wrap($img)
          .should('be.visible')
          .and(($el) => {
            expect($el[0].naturalWidth).to.be.greaterThan(0);
          });
      });
    }
  
    validateAltText() {
      cy.get('img').each(($img) => {
        cy.wrap($img)
          .invoke('attr', 'alt')
          .should('not.be.empty');
      });
    }
  
    clickNext() {
      cy.get('.govbr-carousel-next').click();    }
  
    clickPrevious() {
      cy.get('.govbr-carousel-prev').click();    }
  
    validateImageChanged(direction) {
      cy.get('.current-image').invoke('attr', 'src').then((initialSrc) => {
        if (direction === 'next') {
          this.clickNext();
        } else {
          this.clickPrevious();
        }
        cy.get('.current-image').invoke('attr', 'src').should('not.eq', initialSrc);
      });
    }
  }
  
  export default FotosAduanaPage;
  