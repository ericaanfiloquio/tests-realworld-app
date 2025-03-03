describe("Real World App Tests", () => {
    it("View Transactions", () => {
      cy.visit("http://localhost:3000/signin");
      cy.get("[name='username']").type("Heath93");
      cy.get("[name='password']").type("s3cret");
      cy.get('[data-test="signin-submit"]').click();
      cy.get(".css-1idn90j-MuiGrid-root");
      cy.get("[data-test='nav-personal-tab']").click();
      cy.contains("Kristian Bradtke");
      cy.contains("100");
      cy.get(".TransactionTitle-title").contains("Ted");
      cy.get(".TransactionTitle-title").contains("Kristian");
      cy.get("[data-test='transaction-amount-ICmvnf0rV']").contains("100");
      cy.get(".TransactionTitle-title").click;//usar arrow pra clicar na primeira transação

      
    });

});