describe('loading the About page of the application', () => {
  it('About view', () => {
    cy.visit('/about');
    cy.get('span').should('have.text', 'Hello, my name is Sergey. I am studying in RS-school');
  });
});
