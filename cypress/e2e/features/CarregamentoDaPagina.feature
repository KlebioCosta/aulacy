Feature: Verificar se a página inicial carrega corretamente

  Scenario: Validar carregamento sem erros e presença de elementos essenciais
    Given eu acesso a página inicial da Receita Federal
    Then a página será carregada sem erros
    And os elementos essenciais serão exibidos
