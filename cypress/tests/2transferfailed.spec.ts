describe("Transfering money with Insufficient Balance", () => {

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
  }

    it("Transfering with Insufficient Balance", () => {
      cy.visit("/signin");
      cy.get(selectorsList.usernameField).type("Heath93");
      cy.get(selectorsList.passwordField).type("s3cret");
      cy.get(selectorsList.loginButton).click();
      cy.get(selectorsList.mainPage);
      cy.get(selectorsList.newTransaction).click();
      cy.get(selectorsList.listNameField).click({force : true}).type('Kristian');
      cy.get(selectorsList.listName).eq(2).click();
      cy.get(selectorsList.transferAmount).click().type('40000');
      cy.get(selectorsList.transferNote).click().type('Money to Kristian');
      cy.get(selectorsList.paymentButton).click();
      cy.get(selectorsList.completeTransferPage).contains('error')
      // Resultado: O sistema permitiu que a transação fosse concluída mesmo sem saldo suficiente em conta.
      // Erro: Nenhuma mensagem de erro apareceu. Transação foi concluída com sucesso.
      // Correção: Deveria aparecer uma mensagem informando que "Não há saldo suficiente em conta. Para concluir a transação, adicionar saldo."
    });

});