//your JS code here. If required.
it('should have required elements', () => {
  const tags = ['header', 'div', 'h3', 'ul', 'li', 'h2', 'p', 'img'];
  tags.forEach(tag => {
    cy.get(tag, { timeout: 10000 }).should('exist');
  });
});
