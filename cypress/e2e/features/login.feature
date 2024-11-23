#language: pt

Funcionalidade: Testes de login
    Vai virar uma descrição da funcionalidade.

Contexto: Abrir a página de login
    Dado que acesse a página de autenticação do saucedemo

Cenario: Login válido
    Quando eu digitar o usuário "standard_user"
    E a senha "secret_sauce" e confirmar
    Então deve ser exibida a tela de "Products"

