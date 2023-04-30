describe('loading the Error', () => {
  it('About view', () => {
    cy.visit('/error');

    cy.get('span').should('have.text', 'Page is not found');
  });
});
