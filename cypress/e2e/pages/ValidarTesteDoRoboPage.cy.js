class FormularioPage {
    acessarPagina() {
      cy.visit("https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp");
    }
  
    preencherCampos(cpf, nascimento) {
      cy.get('#txtCPF').clear().type(cpf).wait(500);
      cy.get('#txtDataNascimento').clear().type(nascimento);
    }
  
    submeterFormulario() {
      cy.get('#id_submit').click();
    }
  
    verificarMensagemDeErro() {
      cy.get('.mensagemForm').should('be.visible')
        .and('contain.text', 'O Anti-Robô não foi preenchido corretamente. Por favor, envie novamente.');
    }
  }
  
  export default FormularioPage;
  