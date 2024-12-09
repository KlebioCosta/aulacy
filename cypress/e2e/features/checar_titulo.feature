Feature: Verificar o título da página inicial

    Scenario: O título da página inicial deve estar correto
        Given que o usuário acessa a página inicial
        Then o título da página deve ser Enap - Escola Nacional de Administração Pública - Home
