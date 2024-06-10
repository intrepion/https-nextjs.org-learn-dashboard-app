describe("dashboard spec", () => {
  it("nav links work", () => {
    cy.visit("/dashboard");
    cy.get('[data-cy="logo"]');
    cy.get('[data-cy="textbox email"]').type("user@nextmail.com");
    cy.get('[data-cy="textbox password"]').type("123456");
    cy.get('[data-cy="button log in"]').click({ force: true });
    // cy.wait(4000);
    // cy.get('[data-cy="main header"]').should("have.text", "Dashboard");
    // cy.get('[data-cy="side nav link home active"]').should("have.text", "Home");
    // cy.get('[data-cy="side nav link invoices"]').click({ force: true });
    // cy.get('[data-cy="main header"]').should("have.text", "Invoices");
    // cy.get('[data-cy="side nav link invoices active"]').should(
    //   "have.text",
    //   "Invoices",
    // );
    // cy.get('[data-cy="side nav link customers"]').click({ force: true });
    // cy.get('[data-cy="main header"]').should("have.text", "Customers Page");
    // cy.get('[data-cy="side nav link customers active"]').should(
    //   "have.text",
    //   "Customers",
    // );
    // cy.get('[data-cy="side nav link home"]').click({ force: true });
    // cy.get('[data-cy="main header"]').should("have.text", "Dashboard");
    // cy.get('[data-cy="side nav link home active"]').should("have.text", "Home");
  });

  it("elements work", () => {
    cy.visit("/dashboard");
    cy.get('[data-cy="logo"]');
    cy.get('[data-cy="textbox email"]').type("user@nextmail.com");
    cy.get('[data-cy="textbox password"]').type("123456");
    cy.get('[data-cy="button log in"]').click({ force: true });
    // cy.wait(4000);
    // cy.get('[data-cy="main header"]').should("have.text", "Dashboard");
    // cy.get('[data-cy="invoice cards"]');
    // cy.get('[data-cy="revenue chart and invoice list"]');
    // cy.get('[data-cy="revenue chart"]');
    // cy.get('[data-cy="invoice list"]');
    // cy.get('[data-cy="collected card"]');
    // cy.get('[data-cy="pending card"]');
    // cy.get('[data-cy="invoices card"]');
    // cy.get('[data-cy="customers card"]');
  });
});
