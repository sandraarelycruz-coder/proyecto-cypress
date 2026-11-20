
describe("Pruebas del formulario de contacto", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("debe mostrar un mensaje si los campos están vacíos", () => {
    cy.get("#formulario").submit();

    cy.get("#respuestaFormulario")
      .should("have.text", "Todos los campos son obligatorios");
  });

  it("debe enviar correctamente el formulario completo", () => {
    cy.get("#nombre").type("Carlos");
    cy.get("#correo").type("carlos@gmail.com");
    cy.get("#mensaje").type("Quiero recibir información");

    cy.get("#formulario").submit();

    cy.get("#respuestaFormulario")
      .should("have.text", "Formulario enviado correctamente");
  });

});
