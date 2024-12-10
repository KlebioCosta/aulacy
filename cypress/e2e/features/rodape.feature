Feature: Verificação de links no rodapé

  Scenario: Os ícones de redes sociais no rodapé direcionam para as páginas corretas
    Given que o usuário está no rodapé da página inicial
    When clica no ícone do Facebook
    Then é redirecionado para a página oficial da ENAP no Facebook
