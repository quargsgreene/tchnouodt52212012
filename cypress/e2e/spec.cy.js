describe('tchnouodt52212012 browser tests', () => {
  it('visits the page', () => {
    cy.visit('https://quargsgreene.github.io/tchnouodt52212012/');
  });

  it('plays a note on the synthesizer when clicked', () => {
    cy.get('.synthesizer').click({ multiple: true });
  });
});
