describe("home spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get('[data-cy="logo"]');
    cy.get('[data-cy="desktop hero"]');
    cy.get('[data-cy="mobile hero"]');
  });
});
