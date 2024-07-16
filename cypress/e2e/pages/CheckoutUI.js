class CheckoutUI{

    elements = {
        INPUT_FIRST_NAME: () => cy.get('[data-test="firstName"]'),
        INPUT_LAST_NAME: () => cy.get('[data-test="lastName"]'),
        INPUT_POSTAL_CODE: () => cy.get('[data-test="postalCode"]'),
        BUTTON_CONTINUE: () => cy.get('[data-test="continue"]'),
        BUTTON_FINISH: () => cy.get('[data-test="finish"]'),
        LABEL_MESSAGE: () => cy.get('[data-test="complete-header"]'),
        LABEL_PRICE_BACKPACK: () => cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]'),
        LABEL_PRICE_BIKE_LIGHT: () => cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]'),
    }

    ingresarInformacionBase(nombre, apellido, postal){
        this.ingresarPrimerNombre(nombre);
        this.ingresarApellido(apellido);
        this.ingresarCodigoPostal(postal);
        cy.wait(1000);
        this.presionarContinuar();
    }

    ingresarPrimerNombre(nombre){
        this.elements.INPUT_FIRST_NAME().type(nombre);
    }
    ingresarApellido(apellido){
        this.elements.INPUT_LAST_NAME().type(apellido);
    }
    ingresarCodigoPostal(postal){
        this.elements.INPUT_POSTAL_CODE().type(postal);
    }
    presionarContinuar(){
        this.elements.BUTTON_CONTINUE().click();
    }
    presionarBotonFinalizar(){
        this.elements.BUTTON_FINISH().click();
    }
    verificarMensajeFinalizado(mensaje){
        this.elements.LABEL_MESSAGE().contains(mensaje);
    }
    verificarPreciosResumen(precio1, precio2){
        this.elements.LABEL_PRICE_BACKPACK().contains(precio1);
        this.elements.LABEL_PRICE_BIKE_LIGHT().contains(precio2);
    }
    
}

module.exports = new CheckoutUI();