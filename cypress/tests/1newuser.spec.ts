describe("New User Success", () => {

  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    confirmPasswordField: "[name='confirmPassword']",
    submitButton: "[type='submit']",
    errorAlert: ".Mui-error",
    signUpButton: "[href='/signup']",
    signUpPage: ".SignUpForm-paper",
  }

  it("Creating New User Successfuly", () => {
    cy.visit("/signin");
    cy.get(selectorsList.signUpButton).click();
    cy.get(selectorsList.signUpPage);
    cy.get(selectorsList.firstNameField).type("Joana");
    cy.get(selectorsList.lastNameField).type("Santos");
    cy.get(selectorsList.usernameField).type("joanasantos");
    cy.get(selectorsList.passwordField).type("testando");
    cy.get(selectorsList.confirmPasswordField).type("testando");
    cy.get(selectorsList.submitButton).click();
    cy.get(".SignInForm-paper");
    cy.visit("/signin");
    cy.get(selectorsList.usernameField).type("joanasantos");
    cy.get(selectorsList.passwordField).type("testando");
    cy.get(selectorsList.submitButton).click();
    cy.get(".css-1idn90j-MuiGrid-root");
  
  });

  it("Creating New User with incomplete information1", () => {
    cy.visit("/signin");
    cy.get("[href='/signup']").click();
    cy.get('.SignUpForm-form');
    cy.get(selectorsList.firstNameField).type("Mark");
    cy.get(selectorsList.lastNameField).type("Rock");
    cy.get(selectorsList.usernameField).click();
    cy.get(selectorsList.passwordField).type("1542");
    cy.get(selectorsList.confirmPasswordField).type("1542");
    cy.get(selectorsList.errorAlert);
    cy.get(selectorsList.submitButton);
  });

  it("Creating New User with incomplete information2", () => {
    cy.visit("/signin");
    cy.get("[href='/signup']").click();
    cy.get('.SignUpForm-form');
    cy.get(selectorsList.firstNameField).type("Mark");
    cy.get(selectorsList.lastNameField).click();
    cy.get(selectorsList.usernameField).type("markrock");
    cy.get(selectorsList.passwordField).type("1542");
    cy.get(selectorsList.confirmPasswordField).type("1542");
    cy.get(selectorsList.errorAlert);
    cy.get(selectorsList.submitButton);
  });

  it("Creating New User with incomplete information3", () => {
    cy.visit("/signin");
    cy.get("[href='/signup']").click();
    cy.get('.SignUpForm-form');
    cy.get(selectorsList.firstNameField).type("Mark");
    cy.get(selectorsList.lastNameField).type("Rock");
    cy.get(selectorsList.usernameField).type("markrock");
    cy.get(selectorsList.passwordField).type("154");
    cy.get(selectorsList.confirmPasswordField).type("154");
    cy.get(selectorsList.errorAlert);   
  });

});
