describe("Login Success", () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '[data-test="signin-submit"]',
    mainPage: "[data-test='main']",
    wrongCredentialAlert: "[role='alert']",
  }

  it("Be able to login successfuly", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get(selectorsList.usernameField).type("Heath93");
    cy.get(selectorsList.passwordField).type("s3cret");
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.mainPage);
  });

  it("Login with invalid credentials", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get(selectorsList.usernameField).type("Romeu");
    cy.get(selectorsList.passwordField).type("s3cret");
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
