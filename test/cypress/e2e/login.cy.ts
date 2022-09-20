describe('깃허브 로그인', () => {
  it('깃허브 로그인 버튼 리다이렉트', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('.social__github').click();
    cy.url().should('include', '/github.com');
  });
  it('리다이렉트시 로딩 화면', () => {
    cy.visit('http://localhost:3000/redirect');
    cy.get('.loading__spinner');
    cy.get('.loading__tips');
  });
});
