describe("Real World App Tests", () => {
  it("Creating New User", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get('[data-test="signup"]').click();
    cy.get(".SignUpForm-paper");
    cy.get("#firstName").type("Joana");
    cy.get("#lastName").type("Santos");
    cy.get("#username").type("joanasantos");
    cy.get("#password").type("testando");
    cy.get("#confirmPassword").type("testando");
    cy.get('[data-test="signup-submit"]').click();
    cy.get(".SignInForm-paper");
    cy.visit("http://localhost:3000/signin");
    cy.get("[name='username']").type("joanasantos");
    cy.get("[name='password']").type("testando");
    cy.get('[data-test="signin-submit"]').click();
    cy.get(".css-1idn90j-MuiGrid-root");
  });
});
