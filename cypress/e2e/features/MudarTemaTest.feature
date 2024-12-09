Feature: Alterar o tema atual

    Background: 
    Given eu acesso a página inicial
Scenario: Verificar se o tema está sendo alterado
When clico em mudar tema
Then o tema mudará
And clico em mudar tema para o padrão
Then o tema voltará ao estado inicial