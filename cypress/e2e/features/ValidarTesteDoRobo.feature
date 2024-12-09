Feature: Validar elementos do formulário de consulta

  Scenario: Verificar campos de CPF e Data de Nascimento
    Given eu acesso a página de consulta da Receita Federal

  Scenario: Validar mensagem de teste do Robo
    Given eu acesso a página de consulta da Receita Federal
    When preencho os campos com dados inválidos
    And submeto o formulário
    Then a mensagem de erro será exibida
