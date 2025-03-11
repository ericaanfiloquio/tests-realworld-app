import userData from '../fixtures/user-Data.json'

describe("Login Success", () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '[data-test="signin-submit"]',
    mainPage: "[role='tablist']",
    wrongCredentialAlert: "[role='alert']",
  }

  it("Be able to login successfuly", () => {
    cy.visit("/signin");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.mainPage);
  });

  it("Login with invalid credentials", () => {
    cy.visit("/signin");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
