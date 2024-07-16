class HomeUI{

    elements = {
        ICON_LOGO: () => cy.get('.app_logo'),
        LABEL_PRICE_BACKPACK: () => cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]'),
        LABEL_PRICE_BIKE_LIGHT: () => cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]'),
        BUTTON_ADD_BACKPACK: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        BUTTON_ADD_BIKE_LIGHT: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        LABEL_QUANTITY_CART: () => cy.get('[data-test="shopping-cart-badge"]'),
        BUTTON_SHOPPING_CART: () => cy.get('[data-test="shopping-cart-link"]'),
        BUTTON_CHECKOUT: () => cy.get('[data-test="checkout"]'),
    }

    verifyHome(){
        cy.wait(2000);
        this.elements.ICON_LOGO().should('be.visible');
    }

    agregarProductosCarrito(){
        this.agregarBackpack();
    }

    agregarBackpack(){
        this.elements.BUTTON_ADD_BACKPACK().click();
        this.elements.BUTTON_ADD_BIKE_LIGHT().click();
    }
    verificarPreciosCarrito(precio1, precio2){
        this.elements.LABEL_PRICE_BACKPACK().contains(precio1);
        this.elements.LABEL_PRICE_BIKE_LIGHT().contains(precio2);
    }
    verificarCantidadCarrito(number){
        this.elements.LABEL_QUANTITY_CART().contains(number);
    }
    seleccionarCarritoCompras(){
        this.elements.BUTTON_SHOPPING_CART().click();
    }
    presionarBotonCheckout(){
        this.elements.BUTTON_CHECKOUT().click();
        cy.wait(1000);
    }

}

module.exports = new HomeUI();