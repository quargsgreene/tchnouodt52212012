/* eslint-disable indent */
describe('tchnouodt52212012 browser tests', () => {
  it('visits the page', () => {
    cy.visit('http://127.0.0.1:8887');
  });

  it('finds buttons', () => {
    cy.get('.synthesizer', { multiple: true });
  });
});
