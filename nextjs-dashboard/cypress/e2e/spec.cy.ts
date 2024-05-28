describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get('[data-cy="logo"]');
    cy.get('[data-cy="hero"]');
  });
});
