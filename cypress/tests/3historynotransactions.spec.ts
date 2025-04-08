describe("View History Transactions of a user with no transactions made", () => {
 
  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    confirmPasswordField: "[name='confirmPassword']",
    submitButton: "[type='submit']",
    mainPage: "[role='tablist']",
    myTransactions: "[href='/personal']",
    transactionsPage: '.TransactionList-paper',
    signUpButton: "[href='/signup']",
    signUpPage: ".SignUpForm-paper",
    transactionList: '[data-test="transaction-list"]',
    createTransactionButton: '[data-test="transaction-list-empty-create-transaction-button"]',

  }
 
  it("Confirm that an alert rises in a Nonexistent history transactions of a user", () => {
    cy.visit("/signin");
    cy.get(selectorsList.signUpButton).click();
    cy.get(selectorsList.signUpPage);
    cy.get(selectorsList.firstNameField).type("Joao");
    cy.get(selectorsList.lastNameField).type("Carlos  ");
    cy.get(selectorsList.usernameField).type("joaocarlos");
    cy.get(selectorsList.passwordField).type("test1");
    cy.get(selectorsList.confirmPasswordField).type("test1");
    cy.get(selectorsList.submitButton).click();
    cy.get(".SignInForm-paper");
    cy.visit("/signin");
    cy.get(selectorsList.usernameField).type("joaocarlos");
    cy.get(selectorsList.passwordField).type("test1");
    cy.get(selectorsList.submitButton).click();
    cy.get(selectorsList.mainPage);
    cy.get(selectorsList.myTransactions).click();
    // cy.get('[data-test="user-onboarding-next"]').click();
    // cy.get('#bankaccount-bankName-input').type('TestBank');
    // cy.get('#bankaccount-routingNumber-input').type('123456789');
    // cy.get('#bankaccount-accountNumber-input').type('987654321');
    // Added this part recently because when opening the app, sometimes it is necessary to create a bank account.
    cy.get(selectorsList.transactionsPage).contains('No Transactions');
    cy.get(selectorsList.createTransactionButton);
    
    
 // To make sure I would find a user with no transactions' history, I created a new user, logged in, checked the transaction page and made sure the sign "No Transactions" was shown. I was tested if a "Transaction List would appear", but it didn't, so test was successfull.
  });
});