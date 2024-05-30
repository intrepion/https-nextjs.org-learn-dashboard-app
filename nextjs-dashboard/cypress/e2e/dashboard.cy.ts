describe("dashboard spec", () => {
  it("passes", () => {
    cy.visit("/dashboard");
    cy.get('[data-cy="main header"]').should("have.text", "Dashboard Page");
    cy.get('[data-cy="side nav link home active"]').should("have.text", "Home");
    cy.get('[data-cy="side nav link invoices"]').click();
    cy.get('[data-cy="main header"]').should("have.text", "Invoices Page");
    cy.get('[data-cy="side nav link invoices active"]').should(
      "have.text",
      "Invoices",
    );
    cy.get('[data-cy="side nav link customers"]').click();
    cy.get('[data-cy="main header"]').should("have.text", "Customers Page");
    cy.get('[data-cy="side nav link customers active"]').should(
      "have.text",
      "Customers",
    );
    cy.get('[data-cy="side nav link home"]').click();
    cy.get('[data-cy="main header"]').should("have.text", "Dashboard Page");
    cy.get('[data-cy="side nav link home active"]').should("have.text", "Home");
  });
});
