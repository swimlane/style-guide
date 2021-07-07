describe('Code Editor', () => {
  before(() => {
    cy.visit('/code-editor');
    cy.get('.page-loader').should('not.exist', { timeout: 20000 });
  });

  describe('Code Input', () => {
    beforeEach(() => {
      cy.get('ngx-codemirror').first().as('CUT');
    });

    it('enters text and clears', () => {
      const text = '<a>hello\nworld</a>';

      cy.get('@CUT').fill(text);

      cy.get('@CUT')
        .getValue()
        .should('equal', text);

      cy.get('@CUT')
        .clear()
        .getValue()
        .should('equal', '');
    });
  });
});
