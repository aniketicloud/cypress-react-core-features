/// <reference types="Cypress" />

describe("tasks management", () => {
  it("should open and close the new task modal", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Add Task").click();
    cy.get(".backdrop").click();
  });
});
