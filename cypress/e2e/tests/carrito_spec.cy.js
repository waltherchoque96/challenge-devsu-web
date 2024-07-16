import loginPage from "../pages/LoginUI"
import homePage from "../pages/HomeUI"
import checkoutPage from "../pages/CheckoutUI"
import { faker } from '@faker-js/faker';

describe('Challenge Sauce Demo', () => {

    beforeEach(() =>{
  
      cy.ingresarSauceDemo();
      loginPage.enterUsernamePassword('standard_user','secret_sauce');
      homePage.verifyHome();

    })
  
    it('Agregar 2 productos y completar compra', () => {
        const precioBackPack = '$29.99';
        const precioBikeLight = '$9.99';
        
        homePage.agregarProductosCarrito();
        homePage.verificarCantidadCarrito('2');
        homePage.seleccionarCarritoCompras();
        homePage.verificarPreciosCarrito(precioBackPack, precioBikeLight)
        
        homePage.presionarBotonCheckout();
        checkoutPage.ingresarInformacionBase(faker.name.firstName(), faker.name.lastName(), faker.location.zipCode());
        checkoutPage.verificarPreciosResumen(precioBackPack, precioBikeLight)
        
        checkoutPage.presionarBotonFinalizar();
        checkoutPage.verificarMensajeFinalizado('Thank you for your order!');
    }) 
    
  
})

