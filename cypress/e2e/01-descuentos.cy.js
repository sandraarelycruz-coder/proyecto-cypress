
describe("Pruebas de códigos de descuento", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("debe aceptar un código válido", () => {
    cy.get("#codigo").type("OFERTA20");
    cy.get("#validar").click();

    cy.get("#resultadoDescuento")
      .should("have.text", "Descuento aplicado correctamente");
  });

  it("debe rechazar un código incorrecto", () => {
    cy.get("#codigo").type("PROMO50");
    cy.get("#validar").click();

    cy.get("#resultadoDescuento")
      .should("have.text", "Código de descuento inválido");
  });

});
