/// <reference types="cypress" />

context('Testes de login', () => {

    it('Login válido', () => {
        //abrir a página
        cy.visit('https://www.saucedemo.com/');
        //coletar e digitar o login
        cy.get('[data-test="username"]').type('standard_user');
        //coletar e digitar a senha
        cy.get('[data-test="password"]').type('secret_sauce');
        //clicar no botão login
        cy.get('[data-test="login-button"]').click();
        //Validar resultado esperado - estar na tela de produtos
        cy.get('[data-test="title"]').should('have.text','Products');
        cy.get('[data-test="title"]').should('contain','Product');
    });

    it('Login bloqueado', () => {
        //abrir a página
        cy.visit('https://www.saucedemo.com/');
        //coletar e digitar o login
        cy.get('[data-test="username"]').type('locked_out_user');
        //coletar e digitar a senha
        cy.get('[data-test="password"]').type('secret_sauce');
        //clicar no botão login
        cy.get('[data-test="login-button"]').click();
        //Validar resultado esperado - estar na tela de produtos
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.');
    });

    it('Login em branco', () => {
        //abrir a página
        cy.visit('https://www.saucedemo.com/');
        //coletar e digitar o login
        // cy.get('[data-test="username"]').type('');
        //coletar e digitar a senha
        cy.get('[data-test="password"]').type('secret_sauce');
        //clicar no botão login
        cy.get('[data-test="login-button"]').click();
        //Validar resultado esperado - estar na tela de produtos
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Username is required');
    });

    it('Senha em branco', () => {
        //abrir a página
        cy.visit('https://www.saucedemo.com/');
        //coletar e digitar o login
        cy.get('[data-test="username"]').type('locked_out_');
        //coletar e digitar a senha
        // cy.get('[data-test="password"]').type('secret_sauce');
        //clicar no botão login
        cy.get('[data-test="login-button"]').click();
        //Validar resultado esperado - estar na tela de produtos
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Password is required');
    });

    //Validar o comportamento dos usuários abaixo:
    // locked_out_user
    // problem_user
    // error_user
    // visual_user

    //Validar usuário vazio
    //Validar senha vazia
    
});