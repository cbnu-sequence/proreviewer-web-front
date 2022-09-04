describe('홈', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('홈 화면', () => {
    cy.get('.home').should('have.text', '홈');
  });
});
