describe("Transferring money Successfuly", () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '[data-test="signin-submit"]',
    mainPage: "[role='tablist']",
    newTransaction: '[data-test="nav-top-new-transaction"]',
    listNameField: "[placeholder='Search...']",
    listName: ".MuiList-padding",
    transferAmount: "[placeholder='Amount']",
    transferNote: "[placeholder='Add a note']",
    paymentButton: "[data-test='transaction-create-submit-payment']",
    completeTransferPage: '.MuiContainer-maxWidthMd',
    successfullButton: '[data-test="alert-bar-success"]',
  }

    it("Try to transfer money successfuly", () => {
      cy.visit("/signin");

      cy.get(selectorsList.usernameField).type("Arvilla_Hegmann");
      cy.get(selectorsList.passwordField).type("s3cret");
      cy.get(selectorsList.loginButton).click();
      cy.get(selectorsList.mainPage);
      cy.get(selectorsList.newTransaction).click();
      cy.get(selectorsList.listNameField).click({force : true}).type('Darrel');
      cy.get(selectorsList.listName).contains('Darrel').click({force : true});
      cy.get(selectorsList.transferAmount).click().type('100');
      cy.get(selectorsList.transferNote).click().type('Money to Darrel');
      cy.get(selectorsList.paymentButton).click();
      cy.get(selectorsList.successfullButton);
    });
    });
