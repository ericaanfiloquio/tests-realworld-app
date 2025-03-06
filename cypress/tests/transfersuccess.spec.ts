describe("Transferring money Success", () => {
    it.only("Try to transfer money successfuly", () => {
      cy.visit("http://localhost:3000/signin");
      cy.get("[name='username']").type("Heath93");
      cy.get("[name='password']").type("s3cret");
      cy.get('[data-test="signin-submit"]').click();
      cy.get(".css-1idn90j-MuiGrid-root");
      cy.get('[data-test="nav-top-new-transaction"]').click();
      cy.get("[data-test='users-list']").contains("Kristian").click();
      cy.get("[placeholder='Amount']").click().type('100');
      cy.get("[placeholder='Add a note']").click().type('Money to Kristian');
      cy.get("[data-test='transaction-create-submit-payment']").click();
      cy.get('[data-test="alert-bar-success"]');
    });

    it("Try to transfer money with not enough balance", () => {
      cy.visit("http://localhost:3000/signin");
      cy.get("[name='username']").type("Arvilla_Hegmann");
      cy.get("[name='password']").type("s3cret");
      cy.get('[data-test="signin-submit"]').click();
      cy.get(".css-1idn90j-MuiGrid-root");
      cy.get('[data-test="nav-top-new-transaction"]').click();
      cy.get("[data-test='users-list']").contains("Ted").click();
      cy.get("[placeholder='Amount']").click().type('100');
      cy.get("[placeholder='Add a note']").click().type('Money to Ted');
      cy.get("[data-test='transaction-create-submit-payment']").click();
      cy.get('[data-test="alert-bar-success"]');
    });
  });