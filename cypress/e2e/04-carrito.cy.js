
describe("Pruebas del carrito de compras", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("debe agregar un producto al carrito", () => {

        cy.get("#nombreProducto").type("Teclado");
        cy.get("#precioProducto").type("25");

        cy.get("#agregarProducto").click();

        cy.get("#listaCarrito li")
            .should("have.length", 1)
            .and("contain", "Teclado");

        cy.get("#total")
            .should("have.text", "Total: $25");
    });

    it("debe sumar correctamente varios productos", () => {

        cy.get("#nombreProducto").type("Teclado");
        cy.get("#precioProducto").type("25");
        cy.get("#agregarProducto").click();

        cy.get("#nombreProducto").type("Mouse");
        cy.get("#precioProducto").type("15");
        cy.get("#agregarProducto").click();

        cy.get("#nombreProducto").type("Audifonos");
        cy.get("#precioProducto").type("30");
        cy.get("#agregarProducto").click();

        cy.get("#listaCarrito li")
            .should("have.length", 3);

        cy.get("#total")
            .should("have.text", "Total: $70");
    });

    it("debe eliminar un producto y actualizar el total", () => {

        cy.get("#nombreProducto").type("Teclado");
        cy.get("#precioProducto").type("25");
        cy.get("#agregarProducto").click();

        cy.get("#nombreProducto").type("Mouse");
        cy.get("#precioProducto").type("15");
        cy.get("#agregarProducto").click();

        cy.get("#listaCarrito li")
            .first()
            .find(".eliminarProducto")
            .click();

        cy.get("#listaCarrito li")
            .should("have.length", 1);

        cy.get("#total")
            .should("have.text", "Total: $15");
    });

});
