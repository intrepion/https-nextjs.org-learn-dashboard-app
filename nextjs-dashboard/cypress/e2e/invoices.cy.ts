describe("dashboard spec", () => {
  it("passes", () => {
    cy.visit("/dashboard/invoices");
    cy.get('[data-cy="textbox search"]').type("Evil");
    cy.get('[data-cy="button create invoice"]').click();
  });
});
