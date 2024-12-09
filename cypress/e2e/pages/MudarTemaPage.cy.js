class MudarTemaPage {
    enterURL() {
        cy.visit(
            "https://www.gov.br/receitafederal/pt-br", {timeout: 3000}
        )
    }
    clickTema() {
        cy.get('.link-contraste', { timeout: 5000 })
        .click({ force: true});
    }
    verificarTemaAlterado() {
        cy.get('body', { timeout: 5000 })
        .should('have.class', 'contraste');
        cy.wait(3000);
    };
    verificarTemaPadrão() {
        cy.get('body', { timeout: 10000})
        .should('not.have.class', 'contraste');
    }
    
}

export default MudarTemaPage;