class ConsultarCPFInvalidoPage {
  enterURL() {
    cy.visit(
      "https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas", {timeout: 10000} // Aumentando o timeout para 10 segundos
    )
    cy.wait(3000); // Espera 3 segundos após carregar a URL
  }

  clickIniciar() {
    cy.get('.header > .btn-solicitar', { timeout: 10000 }).click({ force: true }); // Aumentando o timeout para 10 segundos
    cy.wait(2000); // Espera 2 segundos após clicar no botão "Iniciar"
  }

  preencherCampos(cpf, nascimento) {
    cy.get('#txtCPF', { timeout: 10000 }).clear().type(cpf); // Aumentando o timeout para 10 segundos
    cy.wait(1000); // Espera 1 segundo após preencher o CPF
    cy.get('#txtDataNascimento', { timeout: 10000 }).clear().type(nascimento); // Aumentando o timeout para 10 segundos
    cy.wait(1000); // Espera 1 segundo após preencher a data de nascimento
  }
  clickConsultar() {
    cy.get('#id_submit', { timeout: 10000 }).click(); // Aumentando o timeout para 10 segundos
    cy.wait(2000); // Espera 2 segundos após clicar no botão "Consultar"
  }

  verificarMensagemDeBloqueio() {
    cy.get('.clConteudoCentro', { timeout: 10000 }).should('be.visible'); // Aumentando o timeout para 10 segundos
  }
}

export default ConsultarCPFInvalidoPage;
