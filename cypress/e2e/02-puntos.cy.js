
describe("Pruebas de puntos de fidelidad", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("debe calcular correctamente los puntos de una compra", () => {
    cy.get("#compra").type("50");
    cy.get("#calcular").click();

    cy.get("#resultadoPuntos")
      .should("have.text", "Has obtenido 100 puntos");
  });

  it("debe calcular cero puntos cuando no hay compra", () => {
    cy.get("#compra").type("0");
    cy.get("#calcular").click();

    cy.get("#resultadoPuntos")
      .should("have.text", "Has obtenido 0 puntos");
  });

});
