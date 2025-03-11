describe("View Previous Transactions Successfuly", () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '[data-test="signin-submit"]',
    mainPage: "[role='tablist']",
    myTransactions: "[href='/personal']",
    transactionsPage: '.TransactionList-paper',
    signUpButton: "[href='/signup']",
    signUpPage: ".SignUpForm-paper",
    transactionList: '[data-test="transaction-list"]',
  }

    it("Check transactions' history of a user with previous transactions", () => {
      cy.visit("/signin");
      cy.get(selectorsList.usernameField).type("Heath93");
      cy.get(selectorsList.passwordField).type("s3cret");
      cy.get(selectorsList.loginButton).click();
      cy.get(selectorsList.mainPage);
      cy.get(selectorsList.mainPage);
      cy.get(selectorsList.myTransactions).click();
      cy.get(selectorsList.transactionList);
    });

});