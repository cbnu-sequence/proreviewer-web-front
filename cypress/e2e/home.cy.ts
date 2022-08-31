describe('홈', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('초기 셋팅 확인 (삭제 예정)', () => {
    cy.get('.home').should('have.text', '홈');
  });
});
