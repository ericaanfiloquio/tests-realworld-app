describe("View Previous Transactions Successfuly", () => {
    it("View previous transactions of an User", () => {
      cy.visit("http://localhost:3000/signin");
      cy.get("[name='username']").type("Heath93");
      cy.get("[name='password']").type("s3cret");
      cy.get('[data-test="signin-submit"]').click();
      cy.get(".css-1idn90j-MuiGrid-root");
      cy.get("[data-test='nav-personal-tab']").click();
      cy.get(".TransactionTitle-title").eq(0).click();
      cy.get(".TransactionDetail-paper"); //confirmed we are on the Transaction Detail page

    });

});