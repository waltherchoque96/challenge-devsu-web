class LoginUI{

    elements = {
        INPUT_USERNAME: ()=> cy.get('[data-test="username"]'),
        INPUT_PASSWORD: ()=> cy.get('[data-test="password"]'),
        BUTTON_LOGIN: ()=> cy.get('[data-test="login-button"]')
    }

    enterUsernamePassword(user, pass){
        this.typeUsername(user);
        this.typePassword(pass);
        this.pressButtonLogin();
    }

    typeUsername(user){
        this.elements.INPUT_USERNAME().type(user);
    }
    typePassword(pass){
        this.elements.INPUT_PASSWORD().type(pass);
    }
    pressButtonLogin(){
        this.elements.BUTTON_LOGIN().click();
    }

}

module.exports = new LoginUI();