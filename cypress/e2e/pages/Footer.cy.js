class Footer {
    clickSocialMedia(iconName) {
      const selectors = {
        Facebook: 'a[href*="facebook.com"]',
        Twitter: 'a[href*="twitter.com"]',
        LinkedIn: 'a[href*="linkedin.com"]',
      };
      cy.get(selectors[iconName]).click();
    }
  }
  
  export default Footer;
  