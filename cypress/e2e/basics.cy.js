/// <reference types="Cypress" />

describe("tasks page", () => {
  it("should render the main page", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".main-header").find("img");
    // ! Note: do not use get chaining. it starts as separate get commands. 
    // ! e.g. do not use -> cy.get(".main-header").get("img")
    // ! Note: do not use find diretly. always chain find after get.
  });
  it("should display the page title", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains("My Cypress Course Tasks");
  });
});
