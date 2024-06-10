describe("customers spec", () => {
  it("passes", () => {
    cy.visit("/dashboard/customers");
    cy.get('[data-cy="logo"]');
    cy.get('[data-cy="textbox email"]').type("user@nextmail.com");
    cy.get('[data-cy="textbox password"]').type("123456");
    cy.get('[data-cy="button log in"]').click({ force: true });
    cy.wait(1000);
    cy.visit("/dashboard/customers");
    cy.get('[data-cy="main header"]').should("have.text", "Customers Page");
  });
});
