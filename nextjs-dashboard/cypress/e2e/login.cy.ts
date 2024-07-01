describe("home spec", () => {
  it("passes", () => {
    cy.visit("/login");
    cy.get('[data-cy="logo"]');
    cy.get('[data-cy="textbox email"]').type("user@nextmail.com");
    cy.get('[data-cy="textbox password"]').type("123456");
    cy.get('[data-cy="button log in"]').click();
  });
});
