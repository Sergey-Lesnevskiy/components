describe('loading the Forms page ', () => {
  it('form on the page', () => {
    cy.visit('/form');

    cy.get('form').should('be.visible');
  });

  it('invalid form', () => {
    cy.visit('/form');

    cy.get('input[type="text"]').type('se');

    cy.get('button[type="submit"]').click();

    cy.contains('Category is required').should('be.visible');
    cy.contains('Date is required').should('be.visible');

    cy.contains('Radio is required').should('be.visible');
    cy.contains('File is required').should('be.visible');
    cy.contains('Check is required').should('be.visible');

    cy.contains('Title must be more than 3 characters').should('be.visible');
  });

  it('valid form ', () => {
    cy.visit('/form');

    cy.get('input[type="text"]').type('Sergey');
    cy.get('input[type="date"]').type('2000-01-01');
    cy.get('[type="radio"]').check('male');
    cy.get('[type="checkbox"]').check('agree');
    cy.get('select').select('Belarus');

    cy.get('input[type=file]').selectFile(
      {
        fileName: 'photo.png',
        contents: ['this is photo'],
      },
      { force: true }
    );

    cy.get('button[type="submit"]').click();

    cy.contains('Ваша форма отправлена').should('be.visible');
    cy.contains('Name').should('be.visible');
    cy.contains('Date:').should('be.visible');
  });
});
