Feature: Validar seção de fotos da aduana

  Scenario: Validar carregamento e presença de imagens
    Given eu acesso a página de fotos da aduana
    Then todas as imagens devem carregar corretamente
    And todas as imagens devem ter texto alternativo

  Scenario: Validar navegação no slider
    Given eu acesso a página de fotos da aduana
    When clico no botão próximo
    Then a próxima imagem é exibida
    And clico no botão anterior
    Then a imagem anterior é exibida
