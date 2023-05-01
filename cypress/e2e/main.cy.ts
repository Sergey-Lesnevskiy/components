describe('app e2e', () => {
  it('should have a header', () => {
    cy.visit('/');

    cy.get('header').should('have.text', 'MainAboutFormError');
    cy.get('input').should('have.value', '');
  });
});
