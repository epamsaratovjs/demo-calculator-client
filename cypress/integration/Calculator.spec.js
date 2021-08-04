describe('Calculator', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
  });

  context('Calculator, actions', () => {
    it('Should summarize 3 and 5', () => {
      cy.get('.calculator__input').eq(0).type('2');
      cy.get('.calculator__input').eq(1).type('3');
      cy.get('.calculator__button').eq(0).click();
      cy.get('.calculator__result').invoke('text').should('eq', '5');
    });
  });
});


export {};
