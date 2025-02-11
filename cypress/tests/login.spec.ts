describe("Real World App Tests", () => {
  it("Login Success", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[name='username']").type("Heath93");
    cy.get("[name='password']").type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get(".css-1idn90j-MuiGrid-root");
  });

  it("Login Fail", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[name='username']").type("Romeu");
    cy.get("[name='password']").type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]');
  });
});
