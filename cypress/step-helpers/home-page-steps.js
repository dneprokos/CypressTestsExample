import HomePage from '../pageobjects/home-page';

class HomePageSteps {
    constructor() {
        this.homePage = new HomePage();
    }

    openHomePage(){
        cy.visit('/');
    }

    inputTextToNameField(name) {
        this.homePage.getNameField().type(name);
    }

    inputTextToCityField(city) {
        this.homePage.getCityField().type(city);
    }

    clickSubmitButton() {
        this.homePage.getSubmitButton().click();
    }

    clickClearButton() {
        this.homePage.getClearButton().click();
    }

    clearFilerInputFields() {
        this.homePage.getNameField().clear();
        this.homePage.getCityField().clear();
    }

    clickMoveNextStateButtonFor(memberName) {
        this.homePage.getCrewMemberUpButton(memberName).click();
        
    }

    clickMovePreviousStateButtonFor(memberName) {
        this.homePage.getCrewMemberDownButton(memberName).click();
    }

    

} 

export default HomePageSteps;