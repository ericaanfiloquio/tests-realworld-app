describe("New User Success", () => {
  it("Creating New User Successfuly", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[href='/signup']").click();
    cy.get(".SignUpForm-paper");
    cy.get("[name='firstName']").type("Joana");
    cy.get("[name='lastName']").type("Santos");
    cy.get("[name='username']").type("joanasantos");
    cy.get("[name='password']").type("testando");
    cy.get("[name='confirmPassword']").type("testando");
    cy.get("[type='submit']").click();
    cy.get(".SignInForm-paper");
    cy.visit("http://localhost:3000/signin");
    cy.get("[name='username']").type("joanasantos");
    cy.get("[name='password']").type("testando");
    cy.get("[type='submit']").click();
    cy.get(".css-1idn90j-MuiGrid-root");
  
  });

  it("Creating New User with uncomplete information", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[href='/signup']").click();
    cy.get('.SignUpForm-form');
    cy.get("[name='firstName']").type("Mark");
    cy.get("[name='lastName']").type("Rock");
    cy.get("[name='username']").click();
    cy.get("[name='password']").type("1542");
    cy.get("[name='confirmPassword']").type("1542");
    cy.get(".Mui-error");
    cy.get("[type='submit']");
  });

  it("Creating New User Unsuccessfuly", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[href='/signup']").click();
    cy.get('.SignUpForm-form');
    cy.get("[name='firstName']").type("Mark");
    cy.get("[name='lastName']").click();
    cy.get("[name='username']").type("markrock");
    cy.get("[name='password']").type("1542");
    cy.get("[name='confirmPassword']").type("1542");
    cy.get(".Mui-error");
    cy.get("[type='submit']");
  });

  it("Creating New User Unsuccessfuly", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[href='/signup']").click();
    cy.get('.SignUpForm-form');
    cy.get("[name='firstName']").type("Mark");
    cy.get("[name='lastName']").type("Rock");
    cy.get("[name='username']").type("markrock");
    cy.get("[name='password']").type("154");
    cy.get("[name='confirmPassword']").type("154");
    cy.get(".Mui-error");   
  });

});
