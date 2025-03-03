describe("Real World App Tests", () => {
    it.skip("No Transaction History", () => {
      cy.visit("http://localhost:3000/signin");
      cy.get("[name='username']").type("Dina20");
      cy.get("[name='password']").type("s3cret");
      cy.get('[data-test="signin-submit"]').click();
      cy.get(".css-1idn90j-MuiGrid-root");
      cy.get("[data-test='nav-personal-tab']").click();
      cy.contains("No Transactions")
      //pegar usuário sem transações mesmo ou criar um para ver se aparece essa mensagem
      
    });

    it("No Transaction History New User", () => {
        cy.visit("http://localhost:3000/signin");
        cy.get("[href='/signup']").click();
        cy.get(".SignUpForm-paper");
        cy.get("[name='firstName']").type("Erica");
        cy.get("[name='lastName']").type("Santos");
        cy.get("[name='username']").type("jovemsantos");
        cy.get("[name='password']").type("testing");
        cy.get("[name='confirmPassword']").type("testing");
        cy.get("[type='submit']").click();
        cy.get(".SignInForm-paper");
        cy.visit("http://localhost:3000/signin");
        cy.get("[name='username']").type("jovemsantos");
        cy.get("[name='password']").type("testing");
        cy.get("[type='submit']").click();
        cy.get(".css-1idn90j-MuiGrid-root");
    });
    

});