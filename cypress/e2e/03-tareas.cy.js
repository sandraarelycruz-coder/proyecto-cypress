
describe("Pruebas de lista de tareas", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("debe agregar una tarea correctamente", () => {
    cy.get("#tarea").type("Estudiar JavaScript");
    cy.get("#agregarTarea").click();

    cy.get("#listaTareas li")
      .should("have.length", 1)
      .and("contain", "Estudiar JavaScript");
  });

  it("no debe agregar una tarea vacía", () => {
    cy.get("#agregarTarea").click();

    cy.get("#listaTareas li")
      .should("have.length", 0);
  });

});
