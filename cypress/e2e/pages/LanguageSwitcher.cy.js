class LanguageSwitcher {
    selectLanguage(language) {
      const selectors = {
        English: 'a[href="/en/"]',
        Português: 'a[href="/pt/"]',
      };
      cy.get('#language').click();
      cy.get(selectors[language]).click();
    }
  }
  
  export default LanguageSwitcher;
  