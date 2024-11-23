Feature: Testes de login
    Vai virar uma descrição da funcionalidade.

Background: Abrir a página de login
    Given que acesse a página de autenticação do saucedemo

Scenario: Login válido
    When eu digitar o usuário "standard_user"
    And a senha "secret_sauce" e confirmar
    Then deve ser exibida a tela de "Products"

Scenario Outline: Logins com erro
    When eu digitar o usuário <user>
    And a senha <password> e confirmar
    Then deve ser exibida a mensagem <message>

    Examples:
        | user              | password        | message |
        | "locked_out_user" | "secret_sauce"  | "Epic sadface: Sorry, this user has been locked out."  |
        | ""                | "secret_sauce"  | "Epic sadface: Username is required"  |
        | "locked_out"      | ""  | "Epic sadface: Password is required"  |