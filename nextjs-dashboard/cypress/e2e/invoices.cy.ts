describe("invoices spec", () => {
  it("passes", () => {
    cy.visit("/dashboard/invoices");
    cy.get('[data-cy="row Delba de Oliveira $89.45 paid"]');
    cy.get('[data-cy="row Steven Tey $448.00 paid"]');
    cy.get('[data-cy="row Lee Robinson $5.00 paid"]');
    cy.get('[data-cy="row Michael Novotny $345.77 pending"]');
    cy.get('[data-cy="row Emil Kowalski $542.46 pending"]');
    cy.get('[data-cy="textbox search"]').type("Evil");
    cy.get('[data-cy="row Evil Rabbit $6.66 pending"]');
    cy.get('[data-cy="button create"]').click({ force: true });
    cy.get('[data-cy="breadcrumb Create Invoice"]');
    cy.get('[data-cy="select customer"]').select("Evil Rabbit");
    cy.get('[data-cy="textbox amount"]').type("420.69");
    cy.get('[data-cy="radio status paid"]').click({ force: true });
    cy.get('[data-cy="button create"]');
    cy.get('[data-cy="button cancel"]').click({ force: true });
    cy.get('[data-cy="textbox search"]').type("Emil");
    cy.get('[data-cy="button edit Emil Kowalski $542.46 pending"]').click({
      force: true,
    });
    cy.get('[data-cy="breadcrumb Edit Invoice"]');
    cy.get('[data-cy="select customer"]').select("Emil Kowalski");
    cy.get('[data-cy="textbox amount"]').type("960.24");
    cy.get('[data-cy="radio status pending"]').click({ force: true });
    cy.get('[data-cy="button edit"]');
    cy.get('[data-cy="button cancel"]').click({ force: true });
    cy.get('[data-cy="textbox search"]').type("Emil");
    cy.get('[data-cy="button delete Emil Kowalski $542.46 pending"]');
  });
});
