Feature: Alternar idiomas no site

  Scenario: O site muda para o idioma selecionado
    Given que o usuário está na página inicial
    When seleciona o idioma "English" no seletor de idiomas
    Then a url do site deve conter o o diretorio en
