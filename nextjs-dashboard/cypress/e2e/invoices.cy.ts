describe("invoices spec", () => {
  it("passes", () => {
    cy.visit("/dashboard/invoices");
    cy.get('[data-cy="invoice row a1baeb0c-8b4b-4b38-98eb-81e6fcf7c911"]');
    cy.get('[data-cy="invoice row 0e437a90-e9cf-4d6b-b731-905c04aa674e"]');
    cy.get('[data-cy="invoice row 244b1de1-6f9c-46e2-acc6-0a56f10fe5f4"]');
    cy.get('[data-cy="invoice row df504635-e9ed-4363-a479-9e6a9a36c10b"]');
    cy.get('[data-cy="invoice row dcbec06d-678c-4dae-bbd7-49c66d431954"]');
    cy.get('[data-cy="textbox search"]').type("Evil");
    cy.get('[data-cy="invoice row dd1aed6f-374d-4318-88b9-277bd50f709e"]');
    cy.get('[data-cy="button create invoice"]').click();
  });
});
