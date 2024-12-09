Feature: Consutar situação de pessoa física

  Background:
  Given eu acesso a página de consultar cadastro de pessoa física 
Scenario: Verificar mensagem para CPF invalido
  And clico em iniciar
  When eu adiciono as cradenciais
  And clico em consultar
  Then a mensagem de CPF incorreto será exibida


