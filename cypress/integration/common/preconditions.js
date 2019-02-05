import { Given } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from '../../pageobjects/home-page';

let homePage = new HomePage();

Given(`User opens Home Page`, () => {
    cy.visit('/');
});

Given(`User clears input fields`, () => {
    homePage.getNameField().clear();
    homePage.getCityField().clear();   
});
Given(`User clears previous filters`, () => {
    homePage.getClearButton().click();   
});






