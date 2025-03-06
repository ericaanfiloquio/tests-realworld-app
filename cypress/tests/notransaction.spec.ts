describe("View Previous Transactions with No History", () => {
  it("Make sure a alert rises in a non existing transaction user's history", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[name='username']").type("Judah_Dietrich50");
    cy.get("[name='password']").type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get(".css-1idn90j-MuiGrid-root");
    cy.get("[data-test='nav-personal-tab']").click();
    cy.get(".TransactionTitle-title").eq(0).click(); // Entender como acessar um usuário de histórico de transações. Apagar histórico? Criar usuário novo? Banco novo? Selecionar data ou valor da transação para aparecer algo que não tenha?

  });

});